const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('review', {
    id_review: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_solicited: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_prov: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  }, { timestamps: false });
};



