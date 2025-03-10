const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk_dtl', {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SERI: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ID_IKAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KODE_TARIF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    KODE_HS: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NAMA_LOKAL: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    NAMA_UMUM: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    NAMA_LATIN: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    BENTUK: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    UKURAN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    JUMLAH: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    KODE_SATUAN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NETTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NILAI: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NEGARA_ASAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TARIF: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk_dtl',
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
        name: "KODE_TARIF",
        using: "BTREE",
        fields: [
          { name: "KODE_TARIF" },
        ]
      },
      {
        name: "ID_IKAN",
        using: "BTREE",
        fields: [
          { name: "ID_IKAN" },
        ]
      },
    ]
  });
};
