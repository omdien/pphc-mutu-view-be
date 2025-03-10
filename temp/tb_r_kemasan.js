const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_kemasan', {
    KODE_KEMASAN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    URAIAN_KEMASAN: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_r_kemasan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_KEMASAN" },
        ]
      },
      {
        name: "IDX_NAMA_KEMASAN",
        using: "BTREE",
        fields: [
          { name: "URAIAN_KEMASAN" },
        ]
      },
    ]
  });
};
