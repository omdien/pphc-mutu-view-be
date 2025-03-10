const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_hasil_ver_lapangan', {
    id_hsl_vlap: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_vlap: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_tugas: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nip_inspektur: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    sts_produk: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_species: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_jns_olah: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_kemas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_pack: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_ton: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_tgl_prod: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_upi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_haccp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_negara: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_pspl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_importir: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_pel_muat: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_pel_tiba: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_trans: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_cnt: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    no_urut: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    id_kesimpulan: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    kseimpulan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    disposisi: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    sts_print: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_data: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_hasil_ver_lapangan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hsl_vlap" },
        ]
      },
    ]
  });
};
