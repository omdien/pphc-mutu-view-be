const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_jenis_kegiatan', {
    id_kegiatan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id_kegiatan"
    },
    kd_kegiatan: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nm_kegiatan: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_jenis_kegiatan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kd_kegiatan" },
        ]
      },
      {
        name: "id_kegiatan",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_kegiatan" },
        ]
      },
    ]
  });
};
