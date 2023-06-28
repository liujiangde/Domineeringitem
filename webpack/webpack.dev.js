const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.js')
const variable = require('./webpackUtils/variable.js')
const { DIST_PATH } = variable

const config = {
  mode: 'development',
  cache: { type: 'memory' }, //开发环境使用内存缓存
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    open: true,
    hot: true,
    // contentBase: DIST_PATH,
    compress: true, //是否启用gzip压缩
    host: 'localhost',
    port: 30001,
    devMiddleware: {
      index: true,
      publicPath: '/',
      mimeTypes: { phtml: 'text/html' },
    },
  },
}
const mergedConfig = webpackMerge.merge(baseConfig, config)

module.exports = mergedConfig
