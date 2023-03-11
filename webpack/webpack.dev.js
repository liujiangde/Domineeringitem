const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const variable = require('./webpackUtils/variable');

const { DIST_PATH } = variable;

const config = {
  mode: 'development',
  cache: { type: 'memory' }, //开发环境使用内存缓存
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    open: 'chrome',
    // contentBase: DIST_PATH,
    // compress: true, //是否启用gzip压缩
    // publicPath: '/',
    host: 'localhost',
    port: 3000,
    // hot: true,
    // disableHostCheck: true,
    // stats: 'errors-only',
    // proxy: {
    //   '/service': {
    //     target: 'http://localhost:3000',
    //   },
    // },
  },
};
const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;
