const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7002

app.use((req, res, next) => {
  req.headers['From-Middleware'] = 1
  console.log('Node.js Middleware')
  next()
})

app.get('/', (req, res) => {
  console.log(req.headers['From-Middleware'])
  res.send('Home page')
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
