const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7001

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render(`main`, { title: 'Greetings from Pug' })
})

app.listen(port, host,  () => {
  console.log(`Server listens http://${host}:${port}`)
})
