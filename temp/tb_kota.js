const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kota', {
    KODE_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    KODE_PROPINSI: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    URAIAN_KOTA: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_kota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_KOTA" },
        ]
      },
    ]
  });
};
