const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk_dok', {
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
    NO_SERI_DOK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KODE_DOKUMEN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NOMOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NEGARA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ID_REKOMENDASI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_REFF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TANGGAL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DOK_PATH: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk_dok',
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
        name: "IDX_ECERT",
        using: "BTREE",
        fields: [
          { name: "KODE_DOKUMEN" },
          { name: "NOMOR" },
          { name: "NEGARA" },
        ]
      },
      {
        name: "KODE_DOKUMEN",
        using: "BTREE",
        fields: [
          { name: "KODE_DOKUMEN" },
        ]
      },
      {
        name: "SERI",
        using: "BTREE",
        fields: [
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
