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

const { User, Solicited, Review, Provider, Service, Rubro, ImgService, ProviderService} = sequelize.models;


// (async () => {
//   await sequelize.sync({ alter: true });
// })();

// // Lee el archivo JSON
// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Parsea el archivo JSON
//   const jsonData = JSON.parse(data);

//   Promise.all([
//     Rubro.bulkCreate(jsonData.rubro),
//     Service.bulkCreate(jsonData.service),
//     Provider.bulkCreate(jsonData.provider),
//     User.bulkCreate(jsonData.user)
//   ])
//     .then(() => {
//       console.log('Datos insertados correctamente');
//     })
//     .catch((error) => {
//       console.error('Error al insertar datos:', error);
//     });
// });

// Modelo User
User.hasMany(Review, { foreignKey: 'id_user' });
Review.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Solicited, { foreignKey: 'id_user' });
Solicited.belongsTo(User, { foreignKey: 'id_user' });

// Modelo Solicited
Solicited.hasMany(Review, { foreignKey: 'id_solicited' });
Review.belongsTo(Solicited, { foreignKey: 'id_solicited' });
Solicited.belongsTo(Service, { foreignKey: 'id_service' });

// Modelo Provider
Provider.belongsToMany(Service, { through: 'ProviderService', foreignKey: 'id_prov' });

// Modelo Service
Service.belongsToMany(Provider, { through: 'ProviderService', foreignKey: 'id_service' });
Service.hasMany(ImgService, { foreignKey: 'id_service' });

// Modelo ProviderService
Provider.belongsToMany(Service, { through: 'ProviderService', foreignKey: 'id_prov' });
Service.belongsToMany(Provider, { through: 'ProviderService', foreignKey: 'id_service' });

// Modelo Rubro
Rubro.hasMany(Service, { foreignKey: 'id_rubro' });
Service.belongsTo(Rubro, { foreignKey: 'id_rubro' });

// Modelo ImgService
ImgService.belongsTo(Service, { foreignKey: 'id_service' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};