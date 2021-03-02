/** @format */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // "plugin:prettier/recommended",
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'css-modules'],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 'react/jsx-uses-vars': 'error',
    // "postcss-modules/no-undef-class": "error",
    // "postcss-modules/no-unused-class": "warn",
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'css-modules/no-unused-class': [2, { camelCase: true }],
    'css-modules/no-undef-class': [2, { camelCase: true }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before'
          }
        ]
      }
    ],
    'import/newline-after-import': ['warn'],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'import/no-unresolved': 'off'
    // [
    //   'error',
    //   {
    //     ignore: ['@env']
    //   }
    // ]
  },
  ignorePatterns: ['*.config.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'babel-module': {},
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        // moduleDirectory: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx']
      }
    }
  }
};
