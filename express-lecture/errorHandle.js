const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');

const host = '127.0.0.1';
const port = 7003;
//синхронные запросы
app.get('/testing', (req, res) => {
  const err = new Error('Something broke! ');
  err.status = 404;
  throw err;
})
//асинхронные запросы
app.get('/testing2', async (req, res, next) => {
  // throw new Error('Something broke! ')
  return next(new Error('Something broke again! '));
})

app.get('/testing3', asyncHandler(async (req, res, next) => {
  throw new Error('Something broke! asyncHandler');
}))

app.get('/kek', (req, res) => {
  res.send('kek');
})

// app.use((error, req, res, next) => {
//   // Установка кода состояния ответа
//   res.status(error.status);
//
//   // Отправка ответа
//   res.json({
//     status: error.status,
//     message: error.message,
//     stack: error.stack
//   });
// })

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
})


