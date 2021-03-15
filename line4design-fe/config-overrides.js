/** @format */

const path = require('path');

const {
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer,
  override
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

module.exports = override(
  useBabelRc(),
  rewireReactHotLoader(),
  addWebpackAlias({
    // 'react-dom': '@hot-loader/react-dom',
    // 'react-dom$': 'react-dom/profiling',
    // 'scheduler/tracing': 'scheduler/tracing-profiling',
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
