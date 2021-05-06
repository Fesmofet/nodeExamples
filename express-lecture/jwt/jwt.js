const express = require('express'),
  app = express(),
  users = require('./users'),
  jwt = require('jsonwebtoken'),
  dotenv = require('dotenv');


dotenv.config();

const host = '127.0.0.1';
const port = 7004;

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

app.use(express.json())


app.post('/api/auth', (req, res) => {
  for (let user of users) {
    if (
      req.body.login === user.login &&
      req.body.password === user.password
    ) {
      const token = generateAccessToken({ username: req.body.login });

      return res.status(200).json({
        id: user.id,
        login: user.login,
        token,
      })
    }
  }

  return res.status(404).json({ message: 'User not found' })
})

app.get('/user', authenticateToken, (req, res) => {
  return res.status(200).json(req.user)
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
