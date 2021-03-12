/** @format */

// const path = require('path');
// const { alias } = require('react-app-rewire-alias');
const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer
  // addBabelPlugin
  // addDecoratorsLegacy,
  // disableEsLint
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  // addWebpackAlias({
  //   ['~']: './src'
  // }),
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    },
    true
  )
  // alias({
  //   '~': 'src'
  // })
);
