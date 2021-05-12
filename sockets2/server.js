const SocketServer = require('ws').Server;
const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = 8080;

const server = app.listen(port, () => console.log(`Listening on ${port}`));

const wss = new SocketServer({ server, path: '/' });
