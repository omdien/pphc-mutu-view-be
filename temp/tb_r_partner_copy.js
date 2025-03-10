const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_partner_copy', {
    ID_PARTNER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    JENIS_ID: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NO_ID: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    NAMA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALAMAT: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    NEGARA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    USER_CREATED: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DATE_CREATED: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    USER_UPDATED: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LAST_UPDATED: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_partner_copy',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_PARTNER" },
        ]
      },
      {
        name: "ID_PARTNER",
        using: "BTREE",
        fields: [
          { name: "ID_PARTNER" },
        ]
      },
      {
        name: "IDX_NO_ID",
        using: "BTREE",
        fields: [
          { name: "NO_ID" },
        ]
      },
      {
        name: "IDX_NAMA_PARTNER",
        using: "BTREE",
        fields: [
          { name: "NAMA" },
        ]
      },
      {
        name: "NEGARA",
        using: "BTREE",
        fields: [
          { name: "NEGARA" },
        ]
      },
      {
        name: "ALAMAT",
        type: "FULLTEXT",
        fields: [
          { name: "ALAMAT" },
        ]
      },
    ]
  });
};
