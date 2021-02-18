module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', {singleQuote: true}],
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 'off',
  },
  ignorePatterns: ['*.config.js'],
};
