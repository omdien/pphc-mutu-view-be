const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kecamatan', {
    KODE_KECAMATAN: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    KODE_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    URAIAN_KECAMATAN: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kecamatan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_KECAMATAN" },
        ]
      },
    ]
  });
};
