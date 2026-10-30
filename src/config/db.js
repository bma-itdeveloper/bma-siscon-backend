//Importamos las dependencias necesarias
const sql = require('mssql');
const dotenv = require('dotenv');

//Cargamos las variables de entorno desde el archivo .env
dotenv.config();

//Configuración de la base de datos
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

//Creamos un pool de conexiones
const pool = new sql.ConnectionPool(dbConfig);

//Función para conectar a la base de datos
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

//Función para ejecutar consultas a la base de datos
async function queryDatabase(query) {
  return pool.request().query(query);
}

//Exportamos las funciones y la configuración de la base de datos
module.exports = {
  sql,
  dbConfig,
  connectDatabase,
  queryDatabase,
};
