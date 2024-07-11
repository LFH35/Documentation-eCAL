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
    editLink: {
      baseUrl: 'https://github.com/LFH35/Documentation-eCAL/tree/master', // Change to your Github folder where the doc are located
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting_started', 
        collapsed: true 
      } //{ label: 'Example Guide', link: '/guides/example/' },
    },{
      label: 'Development',
      collapsed: true,
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
      collapsed: true,
      autogenerate: {
        directory: 'advanced', 
        collapsed: true 
      }
    },{
      label: 'Doxygen',
      collapsed: true,
      badge: 'Generated',
      autogenerate: {
        directory: 'doxygen/md', 
        collapsed: true 
      }
    },{
      label: 'Eclipse Foundation',
      items: [
        {label: 'Website', link: 'http://www.eclipse.org/', attrs: { target: '_blank' } },
        {label: 'Privacy policy', link: 'http://www.eclipse.org/legal/privacy.php', attrs: { target: '_blank' } },
        {label: 'Terms of Use', link: 'http://www.eclipse.org/legal/termsofuse.php', attrs: { target: '_blank' } },
        {label: 'Copyright agent', link: 'http://www.eclipse.org/legal/copyright.php', attrs: { target: '_blank' } },
        {label: 'Legal', link: 'http://www.eclipse.org/legal', attrs: { target: '_blank' } } ],
 
    }],
  }),
  icon()],
  markdown: {
	shikiConfig: expressiveCodeConfig,
  },
});