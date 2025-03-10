const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_trader_dok', {
    FILE_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    DOK_KODE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DOK_PATH: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_trader_dok',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
          { name: "DOK_KODE" },
        ]
      },
    ]
  });
};
