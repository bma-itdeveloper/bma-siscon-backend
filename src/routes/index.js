const express = require('express');
const router = express.Router();
const { queryDatabase } = require('../config/db');

router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Servidor sano',
  });
});

router.get('/db-test', async (req, res) => {
  try {
    const result = await queryDatabase('SELECT 1 AS resultado');
    res.json({
      success: true,
      result: result.recordset[0].resultado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error de conexión a la base de datos',
      error: error.message,
    });
  }
});

module.exports = router;
