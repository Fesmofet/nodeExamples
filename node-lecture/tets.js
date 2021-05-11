dotenv = require('dotenv');
dotenv.config();

const message = ()=> console.table(process.env)

message()
