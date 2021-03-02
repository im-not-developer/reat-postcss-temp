/** @format */

const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer
} = require('customize-cra');

module.exports = override(
  useBabelRc(),

  // addWebpackAlias({
  //   '~': path.resolve(__dirname, './src')
  // }),

  addWebpackAlias({
    '~': path.resolve(__dirname, './src')
  }),
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    },
    true
  )
);
