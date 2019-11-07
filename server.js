
'use strict';

const net = require('net');

const port = 3000 || 3001;
const server = net.createServer();

server.listen(3000, () => console.log(`Server up on ${port}`) );

let socketPool = [];

server.on('connection', (socket) => {
  socketPool.push(socket);
  socket.on('data', buffer => {
    for(let socket of socketPool) {
      
      socket.write(buffer.toString());
    }
  });
});

// let dispatchEvent = (buffer) => {
//   let text = buffer.toString().trim();
//   for (let socket in socketPool) {
//     socketPool[socket].write(`${event} ${text}`);
//   }
// };




