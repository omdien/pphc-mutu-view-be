const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_jenis_uji', {
    id_jenis_uji: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    ket_jenis_uji: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_jenis_uji',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_jenis_uji" },
        ]
      },
    ]
  });
};
