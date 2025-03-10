const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kecamatan_old', {
    KODE_KECAMATAN: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    KODE_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    URAIAN_KECAMATAN: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kecamatan_old',
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
