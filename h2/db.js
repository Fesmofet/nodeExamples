const { Client } = require('pg');

const client = new Client({
  user: 'sa',
  host: 'localhost',
  database: 'mydatabase',
  password: '',
  port: 1521,
});
const run = async () => {
  try {
    await client.connect();
    console.log('connected');

  } catch (err) {
    console.log(err);
  }
};
run();
