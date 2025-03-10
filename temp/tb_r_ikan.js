const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_ikan', {
    ID_IKAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NM_DAGANG: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NM_UMUM: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NM_LATIN: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    KD_JENIS_KEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KD_TARIF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_SATUAN: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    KELAS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KELOMPOK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KONSUMSI: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TAWAR: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    HIDUP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BENTUK: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    HIAS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PELAGIS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_KEL_IKAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HSCODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    USER_CREATED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_UPDATED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAST_UPDATED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_ikan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_IKAN" },
        ]
      },
      {
        name: "IDX_IKAN_UPT_HS",
        using: "BTREE",
        fields: [
          { name: "HSCODE" },
        ]
      },
      {
        name: "IDX_IKAN_UPT_TARIF",
        using: "BTREE",
        fields: [
          { name: "KD_TARIF" },
        ]
      },
      {
        name: "IDX_NAMA_DAGANG",
        using: "BTREE",
        fields: [
          { name: "NM_DAGANG" },
        ]
      },
      {
        name: "STATUS",
        using: "BTREE",
        fields: [
          { name: "STATUS" },
        ]
      },
    ]
  });
};
