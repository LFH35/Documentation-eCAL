import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import expressiveCodeConfig from './ec.config.mjs';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
  starlight({
    title: 'Eclipse eCAL™',
    logo: {
      src: './src/assets/ecal-logo.svg',
    },
    favicon: './src/assets/favicon.png',
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    social: {
      github: 'https://github.com/eclipse-ecal/ecal'
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting_started', 
        collapsed: true 
      } //{ label: 'Example Guide', link: '/guides/example/' },
    }],
  }),
  icon()],
  markdown: {
	shikiConfig: expressiveCodeConfig,
  },
});