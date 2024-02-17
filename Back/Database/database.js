require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { POSTGRES_URL } = process.env; // Pedir .Env , sino no funca !!


//Inicio de Base de datos :
const sequelize = new Sequelize(POSTGRES_URL, {
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

const { User, Solicited, Review, Provider, Service, Rubro, ImgService } = sequelize.models;

// Modelo User
User.hasMany(Review, { foreignKey: 'id_user' });
Review.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Solicited, { foreignKey: 'id_user' });
Solicited.belongsTo(User, { foreignKey: 'id_user' });


// Modelo Solicited
Solicited.hasMany(Review, { foreignKey: 'id_solicited' });
Review.belongsTo(Solicited, { foreignKey: 'id_solicited' });

//NO EXISTIA RELACION (NEIL)
Solicited.hasMany(Provider, { foreignKey: 'id_prov' });
Provider.belongsTo(Solicited, { foreignKey: 'id_solicited' });

// Modelo Provider
Provider.hasMany(Service, { foreignKey: 'id_service' });
Service.belongsTo(Provider, { foreignKey: 'id_service' });

// Modelo Service
Service.hasMany(ImgService, { foreignKey: 'id_service' });

// Modelo Rubro
Rubro.hasMany(Service, { foreignKey: 'id_rubro' });
Service.belongsTo(Rubro, { foreignKey: 'id_rubro' })

// Modelo ImgService
ImgService.belongsTo(Service, { foreignKey: 'id_service' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};