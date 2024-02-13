const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('review', {
    id_review: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    id_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_prov:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_service:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
      allowNull: true, // puede no comentar nada 
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
        },
    });
};


