let { Transform } = require('stream')

/**
 * @description 双工流模拟
 * @author 柳江
 * @date 12/03/2023
 * @class MyDuplex
 * @extends {Duplex}
 */
class MyTransform extends Transform {
  constructor() {
    super()
  }

  _transform(chunk, en, cb) {
    this.push(chunk.toString().toUpperCase())
    cb(null)
  }
}

let myTransform = new MyTransform()
myTransform.write('a')
// myTransform.write('生死离别常有，得去习惯', () => {
//   console.log('执行了')
// })
myTransform.on('data', chunk => {
  console.log(chunk.toString())
})
