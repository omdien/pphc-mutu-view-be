const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_negara', {
    KODE_NEGARA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    URAIAN_NEGARA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLAG_MITRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    kd_hcm: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_negara',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_NEGARA" },
        ]
      },
      {
        name: "IDX_NAMA_NEGARA",
        using: "BTREE",
        fields: [
          { name: "URAIAN_NEGARA" },
        ]
      },
    ]
  });
};
