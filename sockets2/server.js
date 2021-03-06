const WebSocket = require('ws');
const express = require('express');
// const app = express();

// const host = '127.0.0.1';
const port = 8080;

// const server = app.listen(port, () => console.log(`Server listens http://${host}:${port}`));

const wss = new WebSocket.Server({ port, path: '/' });

wss.on('connection', (socket, req) => {
  const ip = req.socket.remoteAddress;
  console.log(ip)
  console.log('Got connection from new peer');
  socket.on('message', (message) => {
    try {
      message = JSON.parse(message)
    } catch (error) {
      return console.log(error)
    }
    switch (message.method) {
      case 'setNickname':
        socket.nickName = message.value
        break;
      case 'sendAll':
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({type: 'generalChat', value: `${socket.nickName}: ${message.value}`}))
          }
        })
        break;
    }
  })
  socket.on('close', () => {
    console.log(`${socket.nickName || 'guest'} disconnected`);
  });
})

const heartbeat = () => {
  setInterval(() => {
  wss.clients.forEach((client) => {
      client.send(JSON.stringify({ type: 'HEARTBEAT' }));
    });
  }, 20 * 1000);
};

heartbeat()
