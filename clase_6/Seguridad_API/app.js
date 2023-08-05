const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');

const autenticacion = auth({
    audience: 'http://example/api/libros',
    issuerBaseURL: 'https://dev-ywly72mpareuyyul.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
// Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

// Configuracion Middleware con el Servidor de Autorización

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require('./routes/libros');


//Configuramos el middleware de autenticacion
app.use('/libros',autenticacion,librosRouter);

app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});