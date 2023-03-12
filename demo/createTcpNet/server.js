const net = require('net')

// 创建服务端实例
const server = net.createServer()
const PORT = 1234
const HOST = 'localhost'

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log('服务端已经开启', 'host:', HOST, 'port:', PORT)
})

server.on('connection', socket => {
  socket.on('data', chunk => {
    const msg = chunk.toString()
    console.log(msg)
    socket.write(Buffer.from(`您好 ${msg}`))
  })
})
server.on('close', () => {
  console.log('服务端关闭了')
})

server.on('error', error => {
  if (err.code === 'EADDRINUSE') {
    console.log('地址正在被使用')
  } else {
    console.log(err)
  }
})
