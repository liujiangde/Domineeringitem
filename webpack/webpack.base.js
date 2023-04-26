const path = require('path')
//变量配置工具类
const variable = require('./webpackUtils/variable.js')
//别名工具类
const resolveConfig = require('./webpackUtils/resolve.js')
//公用插件工具类
const plugins = require('./webpackUtils/plugins.js')
const { SRC_PATH, DIST_PATH, IS_DEV, IS_PRO, getCDNPath } = variable

const config = {
  entry: {
    index: path.join(SRC_PATH, 'index.tsx'),
  },
  // webpack 提取这些 source map，并内联到最终的 bundle 中。
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'), // 有待优化 没有分包
    filename: 'bundle.js', // 有待优化
    // publicPath: getCDNPath(),
    // globalObject: 'this',
    // chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/[name].[contenthash:8].chunk.js',
    // assetModuleFilename: 'assets/[hash][ext][query]',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$|\.scss$/i,
        include: [SRC_PATH],
        exclude: /node_modules/, // 取消匹配node_modules里面的文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: !IS_PRO,
            },
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(SRC_PATH, 'assets', 'css', 'core.scss'),
            },
          },
        ],
      },
    ],
  },
  resolve: resolveConfig,
  plugins: plugins.getPlugins(),
}

module.exports = config
