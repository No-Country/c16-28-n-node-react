const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('provider', {
    id_prov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    otherCertif:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    address:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_service:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },
    contact:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps:false});
}


