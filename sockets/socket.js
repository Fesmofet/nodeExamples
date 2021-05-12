const express = require('express');
const app = express();
const { Server } = require("socket.io");
const host = '127.0.0.1';
const port = 7090;

const server = app.listen(port, () => console.log(`Server listens http://${host}:${port}`));
const io = new Server(server);

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
