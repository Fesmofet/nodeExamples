const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const host = '127.0.0.1';
const port = 4590;


const storage = multer.diskStorage({
  destination:  (req, file, cb)  => {
    cb(null, `${__dirname}/assets/img`)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer({ storage: storage });

app.post(
  '/',
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
        res.status(200).contentType("text/plain").end("File uploaded!");
  }
);


app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
