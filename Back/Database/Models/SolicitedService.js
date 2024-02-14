const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo : Servicio ya solicitado
  const Solicited = sequelize.define('solicited', {
    id_solicited: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, //El pedido va a figurar como No finalizado
    }
    // Aca las fechas de actualizacion será la de realizado o no el servicio
    // y la fecha de creacion se usará como fecha misma de la solicitud 
  });
}
