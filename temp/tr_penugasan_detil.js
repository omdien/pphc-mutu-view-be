const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_penugasan_detil', {
    id_proses_dtl: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_tugas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nip_petugas: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    nama_petugas: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_penugasan_detil',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_proses_dtl" },
        ]
      },
    ]
  });
};
