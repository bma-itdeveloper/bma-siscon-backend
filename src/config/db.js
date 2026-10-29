const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 1433),
  database: process.env.DB_NAME || 'pruebas',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};

const pool = new sql.ConnectionPool(dbConfig);

async function connectDatabase() {
  try {
    await pool.connect();
    console.log('Conexión correcta a SQL Server');
    return pool;
  } catch (error) {
    console.error('Error al conectar a SQL Server:', error.message);
    throw error;
  }
}

async function queryDatabase(query) {
  return pool.request().query(query);
}

module.exports = {
  sql,
  dbConfig,
  connectDatabase,
  queryDatabase,
};
