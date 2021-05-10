/** @format */
const {
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer,
  override,
  addWebpackPlugin,
  setWebpackPublicPath,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

module.exports = override(
  useBabelRc(),
  rewireReactHotLoader(),
  addWebpackAlias({
    '~': require('path').resolve(__dirname, 'src'),
  }),
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    },
    true,
  ),
  setWebpackPublicPath(),
  // reactAppRewirePostcss(config, {})
);
