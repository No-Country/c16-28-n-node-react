// En un archivo como providerService.js en tu carpeta Models
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ProviderService = sequelize.define('ProviderService', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_prov: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Provider',
          key: 'id_prov'
        }
      },
      id_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Service',
          key: 'id_service'
        }
      }
    }, { timestamps: false });
  
    return ProviderService;
  };
  