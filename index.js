const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

console.log(process.env); //te muestra todas las variables de entorno no solo la del puerto

// Crear servidor de express
const app = express();

//base de datos

dbConnection()

//directorio público

app.use( express.static('public'));

//lectura y parseo del body
app.use( express.json());

//rutas de autenticacion
app.use('/api/auth', require('./routes/auth'));
//rutas de eventos


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})