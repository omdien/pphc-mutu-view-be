const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_r_layanan', {
    KODE: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KODE_LAYANAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    STS_VERIFIKASI: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_r_layanan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE" },
        ]
      },
    ]
  });
};
