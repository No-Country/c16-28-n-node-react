require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const SolicitedService = require('./Models/SolicitedService');
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

const { user , solicitedService, review , provider, service, rubro, imgService} = sequelize.models;

// Modelo User
user.hasMany(solicitedService);  // usuario puede realizar varios pedidos
solicitedService.belongsTo(user); 
user.hasMany(review);

  // Modelo SolicitedService
solicitedService.hasMany(review);
review.belongsTo(solicitedService);
solicitedService.hasMany(review);
solicitedService.hasOne(service, {
    foreignKey: {
        name: 'solicitedServiceId',
        allowNull: false,
        unique: true, // Esta restricción asegura que cada solicitud de servicio tenga solo un servicio asociado
    },
    });
    service.belongsTo(solicitedService);

// Modelo Provider
provider.hasMany(service);
service.belongsTo(provider);

// Modelo Service
service.belongsTo(rubro);
service.hasMany(imgService);

// Modelo Rubro
rubro.hasMany(service);

// Modelo ImgService
imgService.belongsTo(service);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};