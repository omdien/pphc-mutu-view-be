const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_hc_mutu', {
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    no_proses: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    kd_hcm: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    no_hc_mutu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    no_hc_mutu_ext: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    no_seri_mutu: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    kd_negara_asal: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    nm_negara_asal: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    unit_pusat: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    unit_daerah: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    al_unit_daerah: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    telp_unit_daerah: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_pengirim: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    al_pengirim: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    kdpos_pengirim: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    telp_pengirim: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_penerima: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    al_penerima: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    kdpos_penerima: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telp_penerima: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    no_reg_upi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kd_negara_reg_upi: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nm_upi: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    al_upi: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    telp_upi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deskripsi_produk: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    spesies_produk: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    kd_produksi: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    tgl_produksi: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    negara_asal_produk: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    wilayah_asal_produk: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cultured: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cultured_area: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    wild: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    catch_area: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    kapal_tangkap: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    processing_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hscode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    kondisi_barang: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gd_cold_storage: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    temperature_uraian: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ktgr_temperature: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    konsumsi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    jml_kms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    jns_kms: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    no_cnt: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    sgl_cnt: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    no_n_sgl_cnt: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    netto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bruto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_jns_trans: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    jns_trans: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nm_trans: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    no_flight: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_trans_lain: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_ref_muat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tgl_berangkat: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nm_ngr_tujuan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kd_ngr_tujuan: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pel_asal: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pel_tujuan: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ue_permit: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ue_reg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tgl_hc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    add_info: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    kota_ttd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nm_pejabat: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nip_pejabat: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    no_skhc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_hc_mutu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomor_aju" },
          { name: "no_proses" },
        ]
      },
    ]
  });
};
