const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_ppk_kemasan', {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SERI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MERK: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    JUMLAH: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    KODE_KEMASAN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    BAHAN: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_ppk_kemasan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
          { name: "SERI" },
        ]
      },
    ]
  });
};
