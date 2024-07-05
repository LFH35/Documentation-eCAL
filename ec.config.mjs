import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default {
    plugins: [
        pluginLineNumbers()
    ],
    defaultProps: {
        // Enable line numbers by default
        showLineNumbers: true,
        // But Disable line numbers for certain languages seperatet by , see 'batch,js,html'
        overridesByLang: {
          'batch,shell,ini,powershell': {
            showLineNumbers: false,
          },
        },
      },
  };
  