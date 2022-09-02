const path = require('path');

const productionError =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/prettier',
    '@vue/typescript',
  ],

  rules: {
    // eslint http://eslint.cn/docs/rules/
    // 'no-unused-vars': 'error',
    'no-debugger': productionError,
    'no-console': productionError,
    eqeqeq: ['error', 'always'],

    // prettier https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      // 这里自定义 prettier 的规则
      {
        singleQuote: true,
        arrowParens: 'always',
        semi: true,
      },
    ],

    // import https://github.com/import-js/eslint-plugin-import#rules
    'import/no-useless-path-segments': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index', 'type'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'import/newline-after-import': 'error',

    // typescript https://typescript-eslint.io/rules/
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],

  plugins: [
    // https://github.com/import-js/eslint-import-resolver-typescript#configuration
    'import',
  ],

  settings: {
    // https://github.com/import-js/eslint-import-resolver-typescript#configuration
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
