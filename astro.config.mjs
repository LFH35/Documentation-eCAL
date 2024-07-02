import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Eclipse eCAL™',
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting_started'
      } //{ label: 'Example Guide', link: '/guides/example/' },
    }]
  }), icon()]
});