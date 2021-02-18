const process = require('process');
const COMMON_PLUGINS = [
  'babel-plugin-styled-components',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining',
];
const config = {
  plugins: [
    [ 'module-resolver',
      {
        // alias: {
        // {
          rootPathPrefix: '~',
          rootPathSuffix: 'src'
          // '~': './src',
        },
      // },
    ],
    ...COMMON_PLUGINS,
  ],
};
module.exports = () => {
  // if (process.env.PLATFORM === 'web') {
    return config;
  // }
};