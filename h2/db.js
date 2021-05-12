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
    const res = await client.query('SELECT * FROM Users');
    // const res = await client.query('CREATE TABLE USERS(id serial PRIMARY KEY, name character varying(20) NOT NULL )');
    // const res = await client.query('INSERT INTO USERS (name) VALUES ($1);', ['Boris']);
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
};
run();
