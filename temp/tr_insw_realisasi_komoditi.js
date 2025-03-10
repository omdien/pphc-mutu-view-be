const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_insw_realisasi_komoditi', {
    no_perijinan: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    seri_barang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no_hs: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    deskripsi_hs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ur_barang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nm_latin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spek_barang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_cas: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    no_batch: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    periode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    netto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sediaan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jml_satuan: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    jns_satuan: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    jns_produk: {
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
    flag_perubahan: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_insw_realisasi_komoditi',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no_perijinan" },
          { name: "seri_barang" },
        ]
      },
    ]
  });
};
