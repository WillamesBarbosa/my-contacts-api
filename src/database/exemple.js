const { Client } = require('pg');

const client = new Client({
  host: 'host',
  port: 'port',
  user: 'user',
  password: 'password',
  database: 'database name',
});
client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};
