const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kelurahan', {
    KODE_KELURAHAN: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    KODE_KECAMATAN: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    URAIAN_KEL: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kelurahan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_KELURAHAN" },
        ]
      },
      {
        name: "NM_Kelurahan",
        using: "BTREE",
        fields: [
          { name: "URAIAN_KEL" },
        ]
      },
    ]
  });
};
