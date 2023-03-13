const fs = require('fs')

let rs = fs.createReadStream('test.txt', {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 438, //与进制相关
  autoClose: true,
  start: 0,
  // end: 3,
  hihWaterMark: 2,
})

rs.on('data', chunk => {
  console.log(chunk.toString())
  // 流动模式切换成暂停模式
  rs.pause()
  // 暂停模式切换成流动模式
  setTimeout(() => {
    rs.resume()
  }, 1000)
})
