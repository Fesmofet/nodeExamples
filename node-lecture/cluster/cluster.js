const cluster = require('cluster');
const os= require('os');
const pid = process.pid;

if(cluster.isMaster) {
  const cpusCount = os.cpus().length;
  console.log(`CPUs: ${cpusCount}`)
  console.log(`Master started. Pid: ${pid}`)
  for (let i = 0; i < cpusCount -1; i++) {
    const worker = cluster.fork()
    worker.on('exit', () => {
      console.log(`worker died ${worker.process.pid}`)
      cluster.fork()
    })
    worker.send('hello')
  }
  process.on("message", (msg) => {

  })
}

if(cluster.isWorker) {
  require('./worker');
  process.on('message', (msg) => {
    console.log(msg)
  })
  process.send('dfsdfds')
}
