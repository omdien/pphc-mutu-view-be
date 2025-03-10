const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_trader_alamat', {
    ID_ALAMAT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ALAMAT: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PROPINSI: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    KOTA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    KODEPOS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    STATUS_ALAMAT: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_trader_alamat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ALAMAT" },
        ]
      },
    ]
  });
};
