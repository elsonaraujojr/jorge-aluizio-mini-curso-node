import path from 'path';
require('dotenv').config();

const database_pg = {
  client: process.env.DB_PG_CONNECTION,
  connection: {
    database: process.env.DB_PG_NAME,
    user: process.env.DB_PG_USER,
    password: process.env.DB_PG_PASSWORD,
    host: process.env.DB_PG_HOSTNAME,
    port: parseInt(process.env.DB_PG_PORT!),
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, './src/database/postgresql/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './src/database/postgresql/seeds'),
  },
  useNullAsDefault: true,
};

export default database_pg;

// module.exports = database_pg;
