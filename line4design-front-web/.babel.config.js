/** @format */
const process = require('process');

const COMMON_PLUGINS = [
  'babel-plugin-styled-components',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining'
];
const config = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src'
        }
      }
    ],
    ...COMMON_PLUGINS
  ]
};

module.exports = () => {
  return config;
};
