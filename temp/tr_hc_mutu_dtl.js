const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_hc_mutu_dtl', {
    no_urut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nm_latin: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    jns_asal_produk: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    jns_perlakuan: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dtl_no_reg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dtl_nm_upi: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dtl_jml_kms: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dtl_jns_kms: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dtl_netto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtl_kd_produksi: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    dtl_tgl_produksi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dtl_ngr_asal: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dtl_wlyh_adm: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dtl_no_hc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_hc_mutu_dtl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no_urut" },
          { name: "nomor_aju" },
        ]
      },
    ]
  });
};
