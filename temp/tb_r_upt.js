const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_upt', {
    KD_UNIT: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NM_UNIT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ALAMAT_UNIT: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    STS_AKTIF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NM_PENDEK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KD_PROP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NM_INGGRIS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BUJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LINTANG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KOTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_upt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KD_UNIT" },
        ]
      },
      {
        name: "IDX_NM_UNIT",
        using: "BTREE",
        fields: [
          { name: "NM_UNIT" },
        ]
      },
    ]
  });
};
