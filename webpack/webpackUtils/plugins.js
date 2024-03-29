// const cleanWebpackPlugin = require("clean-webpack-plugin") ;
const WebpackBar = require('webpackbar')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyPlugin = require("copy-webpack-plugin");
const variable = require('./variable.js')
const DotenvPlugin = require('dotenv-webpack')
const path = require('path')

// const {CleanWebpackPlugin}=cleanWebpackPlugin;
const { PUBLIC_PATH, DIST_PATH, ENV_CONFIG_PATH, IS_DEV, SRC_PATH } = variable

function getHTMLPlugins() {
  const indexHtmlPlugin = new HtmlWebpackPlugin({
    template: path.join(PUBLIC_PATH, 'index.html'),
    // filename: path.join(DIST_PATH, 'index.html'),
    filename: 'index.html',
    inject: true, //true 插入body底部，head:插入head标签，false:不生成js文件
    // hash: true, // 会在打包好的bundle.js后面加上hash串
    title: 'webpack5-react-ts',
    minify: {
      // removeAttributeQuotes: true,
      removeComments: true, // 删除注释
      collapseWhitespace: true, // 去空格
      minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
      minifyJS: true, // 压缩 HTML 中出现的 JS 代码 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
    },
  })
  const definePlugin = new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  })

  return [indexHtmlPlugin]
}

function getPlugins() {
  // clean
  // const cleanPlugin = new CleanWebpackPlugin({
  //     cleanOnceBeforeBuildPatterns: ["**/*", '!dll', '!dll/*.*']
  // });
  // 更加灵活的热更新方案
  // const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin({})
  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
    chunkFilename: IS_DEV ? 'css/[name].chunk.css' : 'css/[name].[contenthash:8].chunk.css',
    // 常遇到如下警告，Conflicting order. Following module has been added:…。
    // 此警告意思为在不同的js中引用相同的css时，先后顺序不一致。也就是说，在1.js中先后引入a.css和b.css，而在2.js中引入的却是b.css和a.css，此时会有这个warning。
    ignoreOrder: true,
  })

  const dotenvPlugin = new DotenvPlugin({
    path: ENV_CONFIG_PATH,
  })

  const webpackBarPlugin = new WebpackBar({
    color: '#85d', // 默认green，进度条颜色支持HEX
    basic: false, // 默认true，启用一个简单的日志报告器
    profile: false, // 默认false，启用探查器。
  })

  const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin()
  // const copyPlugin=new CopyPlugin({
  //     patterns: [
  //       { from: path.resolve(SRC_PATH,"assets"), to: path.resolve(DIST_PATH,"assets") },
  //     ],
  // });

  return [
    // cleanPlugin,
    // copyPlugin,
    ...getHTMLPlugins(),
    dotenvPlugin,
    miniCssPlugin,
    webpackBarPlugin,
    reactRefreshWebpackPlugin,
  ]
}

module.exports = {
  getPlugins,
}
