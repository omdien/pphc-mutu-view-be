const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_insw_realisasi_transport', {
    no_perijinan: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    moda_angkut_no: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    moda_angkut_nama: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_tiba_berangkat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    neg_asal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    neg_transit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    neg_muat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    neg_tujuan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pel_asal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pel_transit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pel_muat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pel_tujuan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tmp_timbun: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nama_instalasi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alamat_instalasi: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_insw_realisasi_transport',
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
