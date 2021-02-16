const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');

const indexSourceFilePath = path.resolve('./public/index.ejs');



module.exports = (env, argv) => ({
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'react-hot-loader/patch',
    './index.js',
  ],
  output: {
    filename:
      argv.mode === 'development' ? 'js/[name].js' : 'js/[name].[hash].js',
    path: path.join(__dirname, '/build'),
    publicPath: '/',
  },
  devtool: argv.mode === 'development' ? 'eval-cheap-module-source-map' : false,
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: [ '.ts', '.tsx', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s?css$/i,
        use: [
          argv.mode === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: argv.mode === 'development',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: argv.mode === 'development',
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },

          },
          { loader: "sass-loader" }
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i,
        loader: 'file-loader',
        options: {
          name:
            argv.mode === 'development'
              ? '[path][name].[ext]'
              : '[name]-[hash].[ext]',
          esModule: false,
          outputPath: 'assets/',
        },
      },
    ]
  },
  plugins: [ new CleanWebpackPlugin(),
    ...(argv.mode === 'development'
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash].css',
            chunkFilename: 'css/[id].css',
          }),
        ]),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*',
          to: '[path][name].[ext]',
          filter: async (resourcePath) => {
            // index.ejs 파일은 복사하지 않음
            if (resourcePath === indexSourceFilePath) {
              return false;
            }

            return true;
          },
          transformPath: (filePath) => {
            // path에서 public/ 부분 제거
            const newPathSep = filePath.split(path.sep).slice(1);
            return path.join(...newPathSep);
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
      filename: 'index.html',
    }),
    new CssUrlRelativePlugin(),
    new webpack.DefinePlugin({
      __DEV__: argv.mode === 'development',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
});