const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tarif_pnbp', {
    kd_tarif: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    kd_kel_ikan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    jn_pemeriksaan: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    satuan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarif: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    satuan_int: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    kd_kel_tarif: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pembagian: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_jns_tarif: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    kel_pemeriksaan: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    id_metode_p15: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    sts_new_tarif: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    kd_tarif_lama: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kd_simponi: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    jns_pemeriksaan_simponi: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    pp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    kd_akun: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_tarif_pnbp: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tb_tarif_pnbp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tarif_pnbp" },
        ]
      },
    ]
  });
};
