const net = require('net');

const client = net.createConnection({
  port: '1234',
  host: '127.0.0.1',
});

client.on('connect', () => {
  client.write('发送数据');
});
client.on('data', chunk => {
  console.log(chunk.toString());
});

client.on('error', error => {
  console.log(error);
});
client.on('close', () => {
  console.log('客户端断开连接');
});
