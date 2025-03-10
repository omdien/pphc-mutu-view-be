const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk_container', {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SERI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMOR: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    UKURAN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    JENIS_STUFF: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    KETERANGAN_ISI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMOR_SEGEL: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk_container',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
          { name: "SERI" },
        ]
      },
      {
        name: "NOMOR_AJU",
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
        ]
      },
    ]
  });
};
