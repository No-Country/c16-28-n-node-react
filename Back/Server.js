const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./Routes/index.js');
const { conn } = require('./Database/database.js');
const express = require('express');
const server = express();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const cloudName = process.env.CLOUDINARY_NAME;
const cloudKey = process.env.CLOUDINARY_API_KEY;
const cloudSecret = process.env.CLOUDINARY_API_SECRET;

server.name = 'API';

server.use(cors({
  origin: ["http://localhost:5173", "http://dev.serviapp.solutions"],
  credentials: true,
}))



server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Credentials', 'true');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept'
  // );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudKey,
  api_secret: cloudSecret,
});

// Detector de errores:
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).json({ error: message });
});

// Server On:
console.log('Iniciando la aplicación');
conn
  .sync()
  .then(() => {
    server.listen(port, async () => {
      console.log('Servidor ON in http://localhost:3001/');
    });
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error sincronizando la base de datos:', error);
  });
