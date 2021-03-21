import path from 'path';
require('dotenv').config();

const database_ms = {
  client: process.env.DB_MS_CONNECTION,
  connection: {
    database: process.env.DB_MS_NAME,
    user: process.env.DB_MS_USER,
    password: process.env.DB_MS_PASSWORD,
    host: process.env.DB_MS_HOSTNAME,
    port: parseInt(process.env.DB_MS_PORT!),
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, './src/database/mysql/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './src/database/mysql/seeds'),
  },
  useNullAsDefault: true,
};

export default database_ms;

// module.exports = database_ms;
