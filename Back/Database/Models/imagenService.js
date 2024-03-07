const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
      allowNull: true, // puede no tener descripción
    },
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_prov: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { timestamps: false });
}
