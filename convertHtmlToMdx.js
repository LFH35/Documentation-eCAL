import fs from "fs";
import path from "path";
import cheerio from "cheerio";

const inputDirectory = "./src/content/docs/doxygen/html";
const outputDirectory = "./src/content/docs/doxygen/mdx";
const outputFileName = 'functions.mdx'; 

function removeFirstLines(content) {
  const lines = content.split("\n");
  lines[0] = "";
  for(let i = 0; lines[i] != "---"; i) lines.shift();
  return lines.join("\n");
}

function removeBrackets(content) {
  content = content.replace(/{/g, '');
  content = content.replace(/}/g, '');
  return content;
}

function replaceMultipleEmptyLines(content) {
  return content.replace(/\n\s*\n\s*\n+/g, "\n");
}

function removeMultilineComments(content) {
  return content.replace(/<!--[\s\S]*?-->/g, '');
}

function removeTags(content) {
  const $ = cheerio.load(content);

  $('div').each((i, el) => {
    $(el).replaceWith($(el).contents());
  });

  $('adress').each((i, el) => {
    $(el).replaceWith($(el).contents());
  });

  return $.html();
}

function convertHtmlToMdx(htmlContent) {

  htmlContent = replaceMultipleEmptyLines(htmlContent);

  htmlContent = removeMultilineComments(htmlContent);

  htmlContent = removeTags(htmlContent);

  htmlContent = removeBrackets(htmlContent);

  htmlContent = htmlContent.replace(/Documentation Eclipse eCAL:/g, '');
  htmlContent = htmlContent.replace(/href="/g, 'href="/doxygen/');
  htmlContent = htmlContent.replace('.hmtl', '');

  const $ = cheerio.load(htmlContent);

  $("title").each((i, el) => {
    $(el).replaceWith(`---\ntitle: "${$(el).html()}"\n---`);
  });

  // Change all h tags to #
  $("h1").each((i, el) => {
    $(el).replaceWith(`## ${$(el).html()}`);
  });

  $("h2").each((i, el) => {
    $(el).replaceWith(`### ${$(el).html()}`);
  });

  $("h3").each((i, el) => {
    $(el).replaceWith(`#### ${$(el).html()}`);
  });

  $("p").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("br").each((i, el) => {
    $(el).replaceWith(`\n${$(el).html()}`);
  });

  $("dd").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("dl").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("dt").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("html").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("div").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("ul").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("table").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("tbody").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("tr").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("td").each((i, el) => {
    $(el).replaceWith(`${$(el).html()}`);
  });

  $("li").each((i, el) => {
    $(el).replaceWith(`- ${$(el).html()}`);
  });

  $("hr").each((i, el) => {
    $(el).replaceWith(`\n---\n`);
  });

  $("meta").remove();
  $("link").remove();
  $("script").remove();
  $("small").remove();
  $("img").remove();

  return $.html();
}

function processFile(filePath, outputDir) {
  const htmlContent = fs.readFileSync(filePath, "utf-8");
  const mdxContent = convertHtmlToMdx(htmlContent);
  const mdxContentWithoutFirstLine = removeFirstLines(mdxContent);

  const relativePath = path.relative(inputDirectory, filePath);
  const outputFilePath = path
    .join(outputDir, relativePath)
    .replace(/\.html$/, ".mdx");

  const outputFileDir = path.dirname(outputFilePath);
  fs.mkdirSync(outputFileDir, { recursive: true });
  fs.writeFileSync(outputFilePath, mdxContentWithoutFirstLine, "utf-8");
}

function processDirectory(directoryPath, outputDir) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      processDirectory(filePath, outputDir);
    } else if (filePath.endsWith(".html")) {
      processFile(filePath, outputDir);
    }
  });
}

function combineMDXFiles(directoryPath, outputDir, outputFileName) {
  try {
    // Liste aller Dateien im Verzeichnis lesen
    const files = fs.readdirSync(directoryPath);

    // Filtere die Dateien nach dem gewünschten Muster im Dateinamen
    const filteredFiles = files.filter(file => file.startsWith('functions_'));

    // Kombinierter Inhalt der Dateien
    let combinedContent = '';

    // Durchlaufe jede Datei und füge ihren Inhalt zur kombinierten Datei hinzu
    filteredFiles.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      combinedContent += fileContent + '\n\n'; // Füge Trennzeichen hinzu (nach Bedarf anpassen)
    });

    // Erstelle das Ausgabeverzeichnis, falls es nicht existiert
    fs.mkdirSync(outputDir, { recursive: true });

    // Schreibe den kombinierten Inhalt in die Ausgabedatei
    const outputFilePath = path.join(outputDir, outputFileName);
    fs.writeFileSync(outputFilePath, combinedContent.trim(), 'utf-8');

    console.log(`Combined MDX files successfully into ${outputFilePath}`);

    // Lösche die Originaldateien nach dem erfolgreichen Schreiben der kombinierten Datei
    filteredFiles.forEach(file => {
      const filePath = path.join(directoryPath, file);
        try {
          fs.unlinkSync(filePath);
          console.log(`Deleted original file: ${filePath}`);
        } catch (unlinkErr) {
          console.error(`Error deleting file: ${filePath}`, unlinkErr);
        }
    });
  } catch (err) {
    console.error('Error combining MDX files:', err);
  }
}

processDirectory(inputDirectory, outputDirectory);

combineMDXFiles(outputDirectory, outputDirectory, outputFileName);