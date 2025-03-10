const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk', {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    TANGGAL_AJU: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NOMOR_PROSES: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TANGGAL_PROSES: {
      type: DataTypes.DATE,
      allowNull: true
    },
    KODE_UPT: {
      type: DataTypes.STRING(7),
      allowNull: true,
      references: {
        model: 'tb_r_upt',
        key: 'KD_UNIT'
      }
    },
    KD_KEGIATAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    KATEGORI: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    JENIS_KOMODITI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    KELOMPOK_KOMODITI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TUJUAN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PERUNTUKAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MAKSUD_KEGIATAN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PELABUHAN_ASAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PELABUHAN_MUAT: {
      type: DataTypes.STRING(5),
      allowNull: true,
      references: {
        model: 'tb_r_pelabuhan',
        key: 'KODE_PELABUHAN'
      }
    },
    PELABUHAN_BONGKAR: {
      type: DataTypes.STRING(5),
      allowNull: true,
      references: {
        model: 'tb_r_pelabuhan',
        key: 'KODE_PELABUHAN'
      }
    },
    MODA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ANGKUT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VOYAGE: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    BENDERA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TANGGAL_TIBA_BERANGKAT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NILAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BRUTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NETTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KODE_TRADER: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NAMA_TRADER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NPWP_TRADER: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ALAMAT_TRADER: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    KODEPOS_TRADER: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_PARTNER: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    KD_TRADER_PART: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NAMA_PARTNER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALAMAT_PARTNER: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    NEGARA_PARTNER: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    KODEPOS_PARTNER: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NAMA_CP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ALAMAT_CP: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    TELEPON_CP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NEGARA_ASAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NEGARA_TUJUAN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NAMA_TTD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    JABATAN_TTD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TEMPAT_TTD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TANGGAL_TTD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NIP_PEJABAT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NAMA_PEJABAT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    JABATAN_PEJABAT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SYNCH: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DATE_CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_CREATED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LAST_UPDATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_UPDATED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    STATUS_REV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMOR_AJU_COPY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMAIL_PARTNER: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
        ]
      },
      {
        name: "KODE_UPT",
        using: "BTREE",
        fields: [
          { name: "KODE_UPT" },
        ]
      },
      {
        name: "PELABUHAN_MUAT",
        using: "BTREE",
        fields: [
          { name: "PELABUHAN_MUAT" },
        ]
      },
      {
        name: "PELABUHAN_BONGKAR",
        using: "BTREE",
        fields: [
          { name: "PELABUHAN_BONGKAR" },
        ]
      },
      {
        name: "KD_KEGIATAN",
        using: "BTREE",
        fields: [
          { name: "KD_KEGIATAN" },
        ]
      },
      {
        name: "TANGGAL_AJU",
        using: "BTREE",
        fields: [
          { name: "TANGGAL_AJU" },
        ]
      },
      {
        name: "STATUS",
        using: "BTREE",
        fields: [
          { name: "STATUS" },
        ]
      },
      {
        name: "PENCARIAN",
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
          { name: "KODE_UPT" },
          { name: "KD_KEGIATAN" },
          { name: "STATUS" },
        ]
      },
      {
        name: "TANGGAL_PROSES",
        using: "BTREE",
        fields: [
          { name: "TANGGAL_PROSES" },
        ]
      },
      {
        name: "KODE_TRADER",
        using: "BTREE",
        fields: [
          { name: "KODE_TRADER" },
        ]
      },
      {
        name: "STATUS_REV",
        using: "BTREE",
        fields: [
          { name: "STATUS_REV" },
        ]
      },
      {
        name: "USER_CREATED",
        using: "BTREE",
        fields: [
          { name: "USER_CREATED" },
        ]
      },
    ]
  });
};
