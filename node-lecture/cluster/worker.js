const http = require('http');
const pid = process.pid;

const server = http
  .createServer((req, res) => {
    // const ip = req.connection.remoteAddress
    const ip = '194.242.96.86'
    // const ip = req.headers['x-real-ip'];
    // console.log(ip)

    console.log('yo')
    // for (let i = 0; i < 1e7; i++) {};
    res.end(`hello from node.js! \n`)
  })
  .listen(8800, () => {
  console.log(`Worker started PID: ${pid}`)
})

process.on('SIGINT', () => {
  console.log('Signal is SIGINT')
  server.close(() => {
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  console.log('Signal is SIGTERM')
  server.close(() => {
    process.exit(0)
  })
})

process.on('SIGUSR2', () => {
  console.log('Signal is SIGUSR2')
  server.close(() => {
    process.exit(1)
  })
})
