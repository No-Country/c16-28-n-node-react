const { DataTypes } = require('sequelize');

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('service', {
    id_service: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_rubro: {
    type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps:false});
}


