const http = require('http');
const pid = process.pid;

const server = http
  .createServer((req, res) => {
    for (let i = 0; i < 1e7; i++) {}
    res.end(`hello from node.js! \n`)
  })
  .listen(8800, () => {
  console.log(`Worker started PID: ${pid}`)
})


