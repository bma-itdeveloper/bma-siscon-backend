//Importamos las depencias del modulo
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv/config';
//CIERRE: Importamos las depencias del modulo

//Declacración de variables
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//CIERRE: Declacración de variables

app.get('/', (req, res)=>{
    res.json({
        success: true,
        message: 'API de BMASISCON funcionando correctamente',
        timestamp: new Date().toISOString(),
    });
});

//app.use('/api', require('./routes/index'));

//Manejador de errores
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor',
    });
});