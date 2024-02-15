const { DataTypes } = require('sequelize');

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('imgService', {
    id_img: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, //puede no tener descripcion
    },
    id_service:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_rubro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },{timestamps:false});
}


