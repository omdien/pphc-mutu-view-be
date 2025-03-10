const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_upi', {
    UPI_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UPI_NAMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPI_ALAMAT: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    UPI_PROP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UPI_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UPI_KODEPOS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UPI_NEG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UPI_TELP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UPI_STATUS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    USER_CREATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATE: {
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
    }
  }, {
    sequelize,
    tableName: 'tb_r_upi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UPI_ID" },
        ]
      },
    ]
  });
};
