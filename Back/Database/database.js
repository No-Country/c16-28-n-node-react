require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { POSTGRES_URL } = process.env; // Pedir .Env , sino no funca !!
// import pg from "pg";

//Inicio de Base de datos :
const sequelize = new Sequelize( POSTGRES_URL, {
  // dialectModule: pg,
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true,
  },
});

// Selecciona los modelos de la carpeta Models:
const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos :
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User , Solicited, Review , Provider, Service, Rubro, ImgService} = sequelize.models;

// Modelo User
User.hasMany(Solicited);  // usuario puede realizar varios pedidos
Solicited.belongsTo(User); 
User.hasMany(Review);

// Modelo Solicited
Solicited.hasMany(Review);
Review.belongsTo(Solicited);
Solicited.hasMany(Review);
Service.belongsTo(Solicited);

// Modelo Provider
Provider.hasMany(Service);
Service.belongsTo(Provider);

// Modelo Service
Service.belongsTo(Rubro);
Service.hasMany(ImgService);

// Modelo Rubro
Rubro.hasMany(Service);

// Modelo ImgService
ImgService.belongsTo(Service);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};