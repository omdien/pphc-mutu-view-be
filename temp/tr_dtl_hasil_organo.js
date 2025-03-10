const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_dtl_hasil_organo', {
    id_dtl_hasil_organo: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_hasil_organo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_ikan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jml_sampel: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    jml_uji: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    id_metode: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    id_metode_p15: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    id_bentuk: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ur_bentuk: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_kondisi: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ur_kondisi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    diagnosa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hsl_diagnosa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_dtl_hasil_analisa_mp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    positif: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    uraian_hsl_uji: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_dtl_hasil_organo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dtl_hasil_organo" },
        ]
      },
    ]
  });
};
