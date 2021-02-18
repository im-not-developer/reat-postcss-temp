module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // "plugin:prettier/recommended",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',

  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'react/jsx-uses-vars': 'error',
    // '@typescript-eslint/no-var-requires': 0,
    // '@typescript-eslint/no-empty-interface': 'off',
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {varsIgnorePattern: '^_', argsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {varsIgnorePattern: '^_', argsIgnorePattern: '^_'},
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    'import/newline-after-import': ['warn'],
    'react/jsx-no-undef': ['error', {allowGlobals: true}],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@env'],
      },
    ],
  },
  ignorePatterns: ['*.config.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {},
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  
};
