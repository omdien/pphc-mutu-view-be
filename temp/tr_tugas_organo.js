const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_tugas_organo', {
    id_organo: {
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
    tgl_tugas: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kd_tempat: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    nm_tempat: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    pejabat: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    sts_data: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sts_print: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    op: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_tugas_organo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_organo" },
        ]
      },
    ]
  });
};
