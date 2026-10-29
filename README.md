# Backend API

Este proyecto es la API REST desarrollada con Node.js, Express y JavaScript para el proyecto BMASISCON.

## Estructura

- `src/app.js`: configuración general de Express.
- `src/server.js`: arranque del servidor.
- `src/config/`: configuración de entorno y conexiones.
- `src/routes/`: endpoints de la API.
- `src/controllers/`: lógica de negocio.
- `src/middlewares/`: middleware de autenticación, errores y validaciones.
- `src/utils/`: utilidades compartidas.

## Instalar dependencias manualmente

Ejecuta esto en la carpeta del backend:

```bash
npm install express cors dotenv morgan
npm install -D nodemon
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Variables de entorno

Copia el archivo `.env.example` a `.env` y modifica los valores según tu entorno.

```bash
cp .env.example .env
```
