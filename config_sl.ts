import path from 'path';

const database_sl = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, './src/database/database.sqlite'),
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, './src/database/sqlite/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './src/database/sqlite/seeds'),
  },
  useNullAsDefault: true,
};

export default database_sl;
