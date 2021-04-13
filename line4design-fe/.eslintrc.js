/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    commonjs: true,
    amd: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'import'],
  rules: {
    // prop type children 프롭스때문에 에러 발생시 사용
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    // 'no-empty-function': 'off',
    // 'import/no-cycle': 'off',
    // '@typescript-eslint/no-empty-function': ['error'],
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // 'css-modules/no-unused-class': [2, { camelCase: true }],
    // 'css-modules/no-undef-class': [2, { camelCase: true }],
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
    'import/no-unresolved': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
      },
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
