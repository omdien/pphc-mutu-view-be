const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_hs', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KODE_HS: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    URAIAN: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    URAIAN_ID: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    URAIAN_EN: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TAHUN: {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_hs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IDX_URAIAN_HS",
        using: "BTREE",
        fields: [
          { name: "URAIAN_ID", length: 767 },
        ]
      },
      {
        name: "IDX_KODE_HS",
        using: "BTREE",
        fields: [
          { name: "KODE_HS" },
        ]
      },
    ]
  });
};
