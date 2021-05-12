const SocketServer = require('ws').Server;
const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = 8080;

const server = app.listen(port, () => console.log(`Server listens http://${host}:${port}`));

const wss = new SocketServer({ server, path: '/' });

wss.on('connection', (ws) => {
  console.log('Got connection from new peer');
  ws.on('message', (message) => {
    try {
      message = JSON.parse(message)
    } catch (error) {
      return console.log(error)
    }
    switch (message.method) {
      case 'setNickname':
        ws.nickName = message.value
        break;
      case 'sendAll':
        wss.clients.forEach((client) => {
          client.send(JSON.stringify({type: 'generalChat', value: `${ws.nickName}: ${message.value}`}))
        })
        break;
    }
  })
})

const heartbeat = () => {
  setInterval(() => {
  wss.clients.forEach((client) => {
      client.send(JSON.stringify({ type: 'HEARTBEAT' }));
    });
  }, 20 * 1000);
};

heartbeat()
