/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    commonjs: true,
    amd: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    // 'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:css-modules/recommended'

    // 'prettier',
    // 'prettier/react',
    // 'prettier/@typescript-eslint',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:import/typescript'
  ],
  parserOptions: {
    useEslintrc: false,
    ecmaFeatures: {
      jsx: true
    },
    // ecmaVersion: 12,
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'css-modules'],
  rules: {
    'import/no-cycle': 'off',
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
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
