const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kota_old', {
    KODE_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    KODE_PROPINSI: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    URAIAN_KOTA: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kota_old',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_KOTA" },
        ]
      },
      {
        name: "NM_KOTA",
        using: "BTREE",
        fields: [
          { name: "URAIAN_KOTA" },
        ]
      },
    ]
  });
};
