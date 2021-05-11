const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const host = '127.0.0.1';
const port = 7090;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', `${socket.nickName}: ${msg}`);
  });

  socket.on('chat nickName', (msg) => {
    socket.nickName = msg;
  });
});

server.listen(port, () => {
  console.log(`Server listens http://${host}:${port}`);
});
