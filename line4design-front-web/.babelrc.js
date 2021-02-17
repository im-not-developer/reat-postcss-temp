// {
//   "plugins": [
//     "babel/plugin-syntax-dynamic-import",
//     "babel-plugin-styled-components",
//     "babel/plugin-proposal-nullish-coalescing-operator",
//     "babel/plugin-proposal-optional-chaining",
//     [
//       "module-resolver",
//       {
//         "alias": {
//           "~": "./src"
//         }
//       }
//     ]
//   ]
// }
const process = require('process');
const COMMON_PLUGINS = [
  'babel-plugin-styled-components',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining',
];
const config = {
  plugins: [
    [ require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '~': './src/',
        },
      },
    ],
    ...COMMON_PLUGINS,
  ],
};
module.exports = () => {
  if (process.env.PLATFORM === 'web') {
    return config;
  }
};