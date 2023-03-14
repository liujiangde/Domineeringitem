let { Duplex } = require('stream')

/**
 * @description 双工流模拟
 * @author 柳江
 * @date 12/03/2023
 * @class MyDuplex
 * @extends {Duplex}
 */
class MyDuplex extends Duplex {
  constructor(source) {
    super()
    this.source = source
  }

  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }

  _write(chunk, en, next) {
    process.stdout.write(chunk)
    process.nextTick(next)
  }
}

let source = ['a', 'b', 'c']

let myDuplex = new MyDuplex(source)

// myDuplex.on('data', chunk => {
//   console.log(chunk.toString());
// });

myDuplex.write('我想离开浪浪山', () => {
  console.log('执行了')
})
