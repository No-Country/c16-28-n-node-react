
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./Routes/index.js');
const express = require('express');
const server = express();

server.name = 'API';

//Esto es puro blablabla ("procedimientos") , sino entienden me dicen :)

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // (Despues agregamos la ruta del front aca)
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Detector de errores: 
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).json({ error: message });
});


// Server On:
console.log('Iniciando la aplicación');
    server.listen(port, async () => {
        console.log('Servidor ON');
        // Aca vamos a tener que agregar la base de datos cuando la tengamos y sincronizarla para que responda los request de las routes 
    });