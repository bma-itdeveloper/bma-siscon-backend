const app = require('./app');
const { connectDatabase } = require('./config/db');

const PORT = process.env.PORT || 8040;

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error.message);
    process.exit(1);
  }
}

startServer();
