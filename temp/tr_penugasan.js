const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_penugasan', {
    id_proses: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_disposisi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_tugas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_tugas: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nip_pejabat: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    nm_pejabat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_penugasan',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_proses" },
        ]
      },
    ]
  });
};
