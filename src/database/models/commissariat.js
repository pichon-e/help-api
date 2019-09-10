/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('commissariat', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    service: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adresse_geographique: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    departement: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code_commune_insee: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    voie: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code_postal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    commune: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    geocodage_x_gps: {
      type: DataTypes.STRING(255)
    },
    geocodage_y_gps: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'commissariat',
    underscored: true,
    timestamps: false
  })
}
