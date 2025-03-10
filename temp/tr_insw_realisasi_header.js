const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_insw_realisasi_header', {
    no_perijinan: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    tgl_perijinan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jns_perijinan: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    kd_perijinan: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ur_perijinan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kd_instansi: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    no_pengajuan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_pengajuan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jns_pengajuan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    kd_keputusan: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tgl_keputusan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    no_pengajuan_k_l: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_pengajuan_k_l: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_awal_perijinan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_akhir_perijinan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ms_berlaku: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    url_kep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ket_tolak: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_kendali: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    narahubung_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    narahubung_jabatan: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    narahubung_identitas: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_insw_realisasi_header',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no_perijinan" },
        ]
      },
    ]
  });
};
