const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_status_dokumen', {
    kode_status: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    uraian_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_status_dokumen',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kode_status" },
        ]
      },
    ]
  });
};
