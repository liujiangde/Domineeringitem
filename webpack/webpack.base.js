const path = require('path');
//变量配置工具类
const variable = require('./webpackUtils/variable');
//别名工具类
const resolveConfig = require('./webpackUtils/resolve');
//公用插件工具类
const plugins = require('./webpackUtils/plugins');
const { SRC_PATH, DIST_PATH, IS_DEV, IS_PRO, getCDNPath } = variable;

const config = {
  entry: {
    index: path.join(SRC_PATH, 'index.tsx'),
  },
  output: {
    path: DIST_PATH,
    filename: IS_DEV ? 'js/[name].bundle.js' : 'js/[name].[contenthash:8].bundle.js',
    publicPath: getCDNPath(),
    globalObject: 'this',
    chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  //loader的执行顺序默认从右到左，多个loader用[],字符串只用一个loader，也可以是对象的格式
  module: {
   //各种loader规则配置
  },
  resolve: resolveConfig,
  plugins: plugins.getPlugins(),
};

module.exports = config;
