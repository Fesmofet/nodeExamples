const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.use(
  '/photos',
  express.static(`${__dirname}/assets/img`)
)

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`)
})
