/** @format */

const path = require('path');

const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer
} = require('customize-cra');

module.exports = override(
  useBabelRc(),

  addWebpackAlias({
    ['~']: path.resolve(__dirname, './src')
  }),
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    },
    true
  )
);
