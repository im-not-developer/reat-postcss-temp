/** @format */

const path = require('path');

const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer
  // addDecoratorsLegacy,
  // disableEsLint
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  // // enable legacy decorators babel plugin
  // addDecoratorsLegacy(),

  // // disable eslint in webpack
  // disableEsLint(),
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
