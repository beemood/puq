import nx from '@nx/eslint-plugin';

export default [
  {
    files: ['**/*.json'],
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: [
      'libs/**/package.json',
      'apps/**/package.json',
      'plugins/**/package.json',
    ],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.mjs',
            '{projectRoot}/vite.config.ts',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
