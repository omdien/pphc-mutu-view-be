const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_propinsi', {
    KODE_PROPINSI: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    URAIAN_PROPINSI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_propinsi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_PROPINSI" },
        ]
      },
      {
        name: "NM_PROPINSI",
        using: "BTREE",
        fields: [
          { name: "URAIAN_PROPINSI" },
        ]
      },
    ]
  });
};
