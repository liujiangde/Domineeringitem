const myTransformCode = require('./myTransformCode')

let ts = new myTransformCode()
let str1 = '学前教育'
console.log(Buffer.from(str1))
console.log(ts.encode(str1, 1))
const temp = ts.encode(str1, 1)

let encodstr = ts.decode(temp)
console.log(encodstr)

let len = ts.getPackageLen(temp)
console.log(len)
// function test(data) {
//   Number.prototype.add = function (count) { return Number(this + count) }
//   Number.prototype.subtract = function (count) { return Number(this - count) }
//   Number.prototype.multiply = function (count) { return Number(this * count) }
//   Number.prototype.division = function (count) { return Number(this / count) }
//   return Number(data)
// }

// const aaa = new Array(100)

// console.log(test(121).add(1));
