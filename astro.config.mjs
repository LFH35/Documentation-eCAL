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
      src: './src/assets/logo.svg',
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
    },{
      label: 'Development',
      autogenerate: {
        directory: 'development', 
        collapsed: true 
      }
    },{
      label: 'Using eCAL',
      autogenerate: {
        directory: 'using_eCAL', 
        collapsed: true 
      }
    },{
      label: 'Advanced',
      autogenerate: {
        directory: 'advanced', 
        collapsed: true 
      }
    },{
      label: 'Doxygen',
      autogenerate: {
        directory: 'doxygen/md', 
        collapsed: true 
      }
    }],
  }),
  icon()],
  markdown: {
	shikiConfig: expressiveCodeConfig,
  },
});