const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('provider', {
    id_prov: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
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
    address:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_service:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    contact:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps:false});
}


