const process = require('process');

const COMMON_PLUGINS = [
  'babel-plugin-styled-components',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-proposal-optional-chaining',
];

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.8.3',
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': './app',
        },
      },
    ],
    'react-hot-loader/babel',
    ...COMMON_PLUGINS,
  ],
};

module.exports = (api) => {
  api.cache(false);

  if (process.env.PLATFORM === 'web') {
    return config;
  }
};
