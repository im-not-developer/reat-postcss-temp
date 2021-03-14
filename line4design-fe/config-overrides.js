/** @format */

const path = require('path');

const {
  addWebpackAlias,
  addBundleVisualizer,
  addBabelPreset,
  override
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

module.exports = override(
  rewireReactHotLoader(),
  useBabelRc(),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
    '~': path.resolve(__dirname, './src')
  })
);
