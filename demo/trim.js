String.prototype.trim = function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var str = this
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  str = str.replace(/^\s\s*/, '') // 移除头部空格
  const ws = /\s/
  i = str.length
  while (ws.test(str.charAt(--i))); // 移除尾部空格
  return str.slice(0, i + 1)
}

// String.prototype.trim = function () {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   var str = this,
//     // eslint-disable-next-line @typescript-eslint/no-redeclare
//     str = str.replace(/^\s\s*/, ''),
//     ws = /\s/,
//     i = str.length
//   while (ws.test(str.charAt(--i)));
//   return str.slice(0, i + 1)
// }
const ss = ' asff   asdffa dsf sdf '

console.log(ss.trim())
