const express = require('express');
const app = express();
const { Server } = require("socket.io");
const host = '127.0.0.1';
const port = 7090;

const server = app.listen(port, () => console.log(`Server listens http://${host}:${port}`));
const wss = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

wss.on('connection', (socket) => {
  console.log('Got connection from new peer');

  socket.on('disconnect', () => {
    console.log(`${socket.nickName || 'guest'} disconnected`);
  });

  socket.on('chat message', (msg) => {
    wss.emit('chat message', `${socket.nickName}: ${msg}`);
  });

  socket.on('chat nickName', (msg) => {
    socket.nickName = msg;
  });
});
