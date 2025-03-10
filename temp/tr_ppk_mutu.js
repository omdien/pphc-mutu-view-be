const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk_mutu', {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    UPI_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UPI_REG_NO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPI_NAMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPI_ALAMAT: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    UPI_TELP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UPI_NO_REG_UE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_NEG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUTU_NEG_ASL_PRODUK: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUTU_DESK: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MUTU_SURV_NO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_SURV_TGL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MUTU_HS_NO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_HS_DESC: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MUTU_AREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MUTU_CULT_PROP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MUTU_CULT_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MUTU_TANGKAP_AREA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_JNS_PRODUK: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUTU_NAMA_KAPAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_GUDANG: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MUTU_TEMP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MUTU_TEMP_TIPE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUTU_PROSES: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    USER_INSERT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_UPDATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAST_UPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ADD_INFO: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk_mutu',
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
        name: "NOMOR_AJU",
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
        ]
      },
    ]
  });
};
