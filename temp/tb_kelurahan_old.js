const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kelurahan_old', {
    KODE_KELURAHAN: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    KODE_KECAMATAN: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    URAIAN_KEL: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kelurahan_old',
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
