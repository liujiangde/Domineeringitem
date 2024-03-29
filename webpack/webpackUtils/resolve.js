const path = require('path')
const variable = require('./variable.js')
const { SRC_PATH, ROOT_PATH } = variable

module.exports = {
  extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
  modules: [path.resolve(ROOT_PATH, 'node_modules')],
  // 查找 package.json main
  mainFields: ['main'],
  alias: {
    '@': SRC_PATH,
    '@images': path.resolve(SRC_PATH, 'assets/images'),
  },
}
