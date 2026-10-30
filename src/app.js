// Importamos las dependencias necesarias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { config } = require('dotenv');

// Creamos una instancia de la aplicación Express
const app = express();

// Cargamos las variables de entorno desde el archivo .env
config();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Ruta raíz para verificar que la API está funcionando
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de BMASISCON funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
});

// Importamos las rutas de la aplicación
app.use('/api', require('./routes/index'));

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
  });
});

module.exports = app;
