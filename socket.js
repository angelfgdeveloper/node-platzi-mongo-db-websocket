const socketIO = require('socket.io');

const socket = {};

const connect = (server) => {
  console.log('Cliente conectado');
  socket.io = socketIO(server)
}

module.exports = {
  connect,
  socket
}