const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();

const host = '127.0.0.1';
const port = 4090;

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// https://nodejs.org/api/fs.html#fs_file_system_flags

// setup the logger

// app.use(morgan('combined', { stream: accessLogStream }))

// app.use(morgan('dev'));

// app.use(morgan('dev', {
//   skip:  (req, res) => res.statusCode < 400
// }))


app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
