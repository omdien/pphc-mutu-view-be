const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_trader_upt', {
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KD_UNIT: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    KODE_TRADER_LOKAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TGL_AKTIF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_UPDATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_trader_upt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_TRADER" },
          { name: "KD_UNIT" },
        ]
      },
    ]
  });
};
