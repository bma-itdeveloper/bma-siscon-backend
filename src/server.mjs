import {app} from './app.mjs';
import dotenv from 'dotenv/config';

async function startServer() {
    try {
        app.listen(process.env.PORT || 8040, () => {
            console.log(`¡Servidor ejecutando! Puerto: ${process.env.PORT || 8040}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar el servidor:', error.message);
        process.exit(1);
    }
};

startServer();