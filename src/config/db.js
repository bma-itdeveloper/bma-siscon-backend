const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'your_database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

module.exports = {
  dbConfig,
};
