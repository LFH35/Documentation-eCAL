import { Octokit } from "@octokit/rest";
import semver from "semver";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

// Helper function to convert __dirname to ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dein Python-zu-JS konvertierter Code

function expandTemplate(templatePath, data) {
    const template = fs.readFileSync(templatePath, "utf-8");
    return template.replace(/\${(.*?)}/g, (_, key) => {
        if (key in data) {
            return data[key];
        } else {
            console.warn(`Template variable '${key}' not found in data.`);
            return ""; // or handle missing variable case appropriately
        }
    });
}


async function generateDownloadTables(ghApiKey, mainPageOutputPath, detailsPagesOutputFolder, templateFolder) {
    const octokit = new Octokit({ auth: ghApiKey });

    const { data: releases } = await octokit.repos.listReleases({
        owner: "eclipse-ecal",
        repo: "ecal"
    });

    const ghReleaseBranchesDict = groupGhReleaseBranches(releases);
    const templateHeaderPath = path.join(templateFolder, "header_template.md");
    const templateMainPagePath = path.join(templateFolder, "mainpage_template.md");
    const templateReleasePagePath = path.join(templateFolder, "releasepage_template.md");

    const headerText = expandTemplate(templateHeaderPath, {});
    const mainPageText = expandTemplate(templateMainPagePath, {});

    let mainPageContent = headerText + mainPageText;
    let releaseBranchTable = "\n| eCAL Version | Windows | Ubuntu (with PPA) | Ubuntu | MacOS |\n|--------------|---------|-------------------|--------|-------|\n";

    for (const [releaseBranch, ghReleaseDict] of Object.entries(ghReleaseBranchesDict)) {
        const releaseVersions = Object.keys(ghReleaseDict).map(v => new semver.SemVer(v));
        const latestReleaseVersion = releaseVersions.sort((a, b) => semver.compare(b, a))[0];
        const ghRelease = ghReleaseDict[latestReleaseVersion];

        const downloadsList = getDownloadsList(ghRelease.assets, latestReleaseVersion);
        const releasePageData = {
            ecal_release_branch: releaseBranch,
            ecal_release_details_table: JSON.stringify(downloadsList, null, 2)
        };

        const releasePageText = expandTemplate(templateReleasePagePath, releasePageData);
        const releasePagePath = path.join(detailsPagesOutputFolder, `ecal_${releaseBranch}.mdx`);
        fs.writeFileSync(releasePagePath, releasePageText, "utf-8");

        const windowsDownloadLinks = downloadsList.filter(d => d.os_group === "windows").map(d => d.ecal_installer_link).flat();
        const ubuntuPpaReleases = getPpaEnabledReleases(Object.keys(ghReleaseDict).map(v => new semver.SemVer(v)));
        const ubuntuPpaReleaseLinks = ubuntuPpaReleases.map(v => ghReleaseDict[v].html_url);
        const ubuntuDownloadLinks = downloadsList.filter(d => d.os_group === "ubuntu").map(d => d.ecal_installer_link).flat();
        const macosDownloadLinks = downloadsList.filter(d => d.os_group === "macos").map(d => d.ecal_installer_link).flat();

        releaseBranchTable += `| ${releaseBranch} | [Download](./details/ecal_${releaseBranch}.mdx) | ${ubuntuPpaReleaseLinks.length ? `[${ubuntuPpaReleases[0]}](./details/ecal_${ubuntuPpaReleases[0]}.mdx)` : ""} | ${ubuntuDownloadLinks.length ? `[Download](./details/ecal_${releaseBranch}.mdx)` : ""} | ${macosDownloadLinks.length ? `[Download](./details/ecal_${releaseBranch}.mdx)` : ""} |\n`;
    }

    mainPageContent = mainPageContent.replace("${release_branch_table}", releaseBranchTable);
    console.log(mainPageContent)
    fs.writeFileSync(mainPageOutputPath, mainPageContent, "utf-8");
}

export function groupGhReleaseBranches(ghReleases) {
    const ghReleaseBranchesDict = {};

    for (const ghRelease of ghReleases) {
        if (ghRelease.prerelease || ghRelease.draft) {
            continue;
        }

        let versionString = ghRelease.tag_name;

        if (versionString.startsWith("v") || versionString.startsWith("V")) {
            versionString = versionString.slice(1);
        }
        if (versionString.startsWith(".")) {
            versionString = versionString.slice(1);
        }

        // Fix format so it can be parsed by semver
        let dotComponents = versionString.split(".");
        if (dotComponents.length === 4) {
            versionString = `${dotComponents.slice(0, 3).join(".")}+${dotComponents[3]}`;
        } else if (dotComponents.length === 5) {
            versionString = `${dotComponents.slice(0, 3).join(".")}-${dotComponents[3]}+${dotComponents[4]}`;
        }

        try {
            const version = new semver.SemVer(versionString);
            const releaseBranch = new semver.SemVer(`${version.major}.${version.minor}.0`);

            if (!ghReleaseBranchesDict[releaseBranch]) {
                ghReleaseBranchesDict[releaseBranch] = {};
            }

            ghReleaseBranchesDict[releaseBranch][version] = ghRelease;
        } catch (error) {
            console.error(`Warning: eCAL Release "${ghRelease.tag_name}" is not parsable to a proper version.`);
            continue;
        }
    }

    return ghReleaseBranchesDict;
}

function getAssetProperties(assetName, ecalVersion) {
    let osGroup = "other";
    let osVersion = new semver.SemVer("0.0.0");
    let isPython = false;
    let pythonVersion = new semver.SemVer("0.0.0");

    const ext = assetName.toLowerCase().slice(assetName.lastIndexOf("."));

    if (assetName.toLowerCase().endsWith(".tar.gz")) {
        osGroup = "source";
    } else if (ext === ".msi" || ext === ".exe") {
        osGroup = "windows";
    } else if (ext === ".deb") {
        osGroup = "ubuntu";

        if (ecalVersion.compare("5.7.2") <= 0) {
            osVersion = new semver.SemVer("20.4.0");
        } else {
            for (const [codename, version] of Object.entries({
                noble: "24.4.0",
                jammy: "22.4.0",
                focal: "20.4.0",
                bionic: "18.4.0",
                xenial: "16.4.0",
                trusty: "14.4.0",
            })) {
                if (assetName.includes(codename)) {
                    osVersion = new semver.SemVer(version);
                    break;
                }
            }
        }

        if (osVersion.compare("0.0.0") === 0) {
            console.warn(`Warning: Unable to match ubuntu installer by ubuntu codenames: "${assetName}" (from eCAL ${ecalVersion})`);
        }
    } else if (ext === ".dmg") {
        osGroup = "macos";
    } else if (ext === ".egg" || ext === ".whl") {
        isPython = true;

        if (ecalVersion.compare("5.7.2") <= 0 && assetName.toLowerCase().includes("linux")) {
            osGroup = "ubuntu";
            osVersion = new semver.SemVer("20.4.0");
        } else {
            if (assetName.toLowerCase().includes("darwin") || assetName.toLowerCase().includes("macosx")) {
                osGroup = "macos";
            } else if (assetName.toLowerCase().includes("win64") || assetName.toLowerCase().includes("win_amd64")) {
                osGroup = "windows";
            } else {
                for (const [codename, version] of Object.entries({
                    noble: "24.4.0",
                    jammy: "22.4.0",
                    focal: "20.4.0",
                    bionic: "18.4.0",
                    xenial: "16.4.0",
                    trusty: "14.4.0",
                })) {
                    if (assetName.includes(codename)) {
                        osGroup = "ubuntu";
                        osVersion = new semver.SemVer(version);
                        break;
                    }
                }
            }
        }

        if (osGroup === "") {
            console.warn(`Warning: Unable to match python binding to an operating system: "${assetName}" (from eCAL ${ecalVersion})`);
        }

        if (ext === ".whl") {
            const components = assetName.slice(0, -4).split("-");
            for (let i = 2; i <= 3; i++) {
                if (components[i] && components[i].match(/[a-zA-Z]{2}[0-9]+/)) {
                    pythonVersion.major = parseInt(components[i][2]);
                    pythonVersion.minor = parseInt(components[i].slice(3));
                    break;
                }
            }
        } else if (ext === ".egg") {
            const pythonMatchResult = assetName.match(/py[0-9]+\.[0-9]+/);
            if (pythonMatchResult && pythonMatchResult.length > 0) {
                pythonVersion = new semver.SemVer(pythonMatchResult[0].slice(2) + ".0");
            }
        }

        if (pythonVersion.compare("0.0.0") === 0) {
            console.warn(`Warning: Unable to determine python version: "${assetName}" (from eCAL ${ecalVersion})`);
        }
    } else {
        console.warn(`Warning: Cannot classify file: "${assetName}" (from eCAL ${ecalVersion})`);
    }

    return { osGroup, osVersion, isPython, pythonVersion };
}

// Funktion zur Erstellung der Download-Liste
export function getDownloadsList(ghAssets, ecalVersion) {
    const downloadList = [];

    for (const asset of ghAssets) {
        const { osGroup, osVersion, isPython, pythonVersion } = getAssetProperties(asset.name, ecalVersion);

        let existingDicts = [];
        if (osGroup === "ubuntu") {
            existingDicts = downloadList.filter((d) => d.osGroup === osGroup && d.osVersion.compare(osVersion) === 0);
        } else {
            existingDicts = downloadList.filter((d) => d.osGroup === osGroup);
        }

        let downloadDict;
        if (existingDicts.length === 0) {
            downloadDict = {
                osGroup,
                osVersion,
                ecalInstallerLink: [],
                pythonDownloadLinks: [],
            };
            downloadList.push(downloadDict);
        } else {
            downloadDict = existingDicts[0];
        }

        if (isPython) {
            const isDefaultPython =
                osGroup === "ubuntu" &&
                osVersion.compare(semver.coerce("20.4.0")) === 0 &&
                pythonVersion.compare(semver.coerce("3.8.0")) === 0; // Beispielwert, anpassen an deine Logik

            downloadDict.pythonDownloadLinks.push({ version: pythonVersion, link: asset.browser_download_url, default: isDefaultPython });
        } else {
            downloadDict.ecalInstallerLink.push(asset.browser_download_url);
        }
    }

    // Sortiere Python-Download-Links
    for (const downloadDict of downloadList) {
        downloadDict.pythonDownloadLinks.sort((a, b) => b.version.compare(a.version)); // Absteigend nach Version sortieren
    }

    // Trenne die Download-Links nach Betriebssystemen
    const windowsDownloadLinks = downloadList.filter((d) => d.osGroup === "windows");
    const ubuntuDownloadLinks = downloadList.filter((d) => d.osGroup === "ubuntu");
    const macosDownloadLinks = downloadList.filter((d) => d.osGroup === "macos");
    const otherDownloadLinks = downloadList.filter((d) => d.osGroup !== "windows" && d.osGroup !== "ubuntu" && d.osGroup !== "macos");

    ubuntuDownloadLinks.sort((a, b) => b.osVersion.compare(a.osVersion)); // Absteigend nach Ubuntu-Version sortieren

    return [...windowsDownloadLinks, ...ubuntuDownloadLinks, ...macosDownloadLinks, ...otherDownloadLinks];
}

export function getPpaEnabledReleases(allReleases) {
    const ppaEnabledReleases = [];

    for (const ecalRelease of allReleases) {
        if (semver.gte(ecalRelease, "5.7.0")) {
            ppaEnabledReleases.push(ecalRelease);
        }
    }

    // Sortiere die PPA-aktivierten Versionen absteigend
    ppaEnabledReleases.sort((a, b) => semver.rcompare(a, b));

    return ppaEnabledReleases;
}

// API key and paths
const ghApiKey = ""; // TODO ADD API KEY
const mainPageOutputPath = "./src/content/docs/advanced/all_releases.mdx";
const detailsPagesOutputFolder = "./src/content/docs/advanced/details";
const templateFolder = "./src/assets/templates/download_table";

// Create details folder if it does not exist
if (!fs.existsSync(detailsPagesOutputFolder)) {
    fs.mkdirSync(detailsPagesOutputFolder);
}

// Generate download tables
generateDownloadTables(ghApiKey, mainPageOutputPath, detailsPagesOutputFolder, templateFolder);