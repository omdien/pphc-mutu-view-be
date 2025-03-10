const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_trader', {
    KODE_TRADER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    JENIS_USAHA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMOR_KUSUKA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    NAMA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NPWP: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NO_IZIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ALAMAT: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    PROPINSI: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    KOTA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    KODEPOS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TELEPON: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    EMAIL_PNBP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KETERANGAN: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TGL_DAFTAR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FILE_ID: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LAST_UPDATED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_trader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_TRADER" },
        ]
      },
      {
        name: "IDX_NM_TRADER",
        using: "BTREE",
        fields: [
          { name: "NAMA" },
        ]
      },
      {
        name: "IDX_NPWP",
        using: "BTREE",
        fields: [
          { name: "NPWP" },
        ]
      },
      {
        name: "FILE_ID",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
      {
        name: "STATUS",
        using: "BTREE",
        fields: [
          { name: "STATUS" },
        ]
      },
    ]
  });
};
