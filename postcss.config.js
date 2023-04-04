module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'), //flexbug修复
    require('postcss-import'), //css导入
    require('postcss-preset-env'), //浏览器兼容
    require('postcss-pxtorem')({
      //px 转换rem
      rootValue: 16, //配置100px为1rem
      propList: ['*'], //匹配CSS中的属性，* 代表启用所有属性
      unitPrecision: 5,
      minPixelValue: 2, // 设置要替换的最小像素值
      propWhiteList: ['*'], // Enables converting of all properties – default is just font sizes.
      selectorBlackList: ['.ig-','node_modules'], // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }),
  ],
}
