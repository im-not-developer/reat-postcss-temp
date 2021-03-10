/** @format */

const path = require('path');

const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer,
  addBabelPlugin
  // addDecoratorsLegacy,
  // disableEsLint
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  // ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
  addBabelPlugin([
    '@babel/plugin-transform-typescript',
    { allowNamespaces: true }
  ]),

  addWebpackAlias({
    ['~']: path.resolve(__dirname, 'src')
  }),

  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    },
    true
  )
);
