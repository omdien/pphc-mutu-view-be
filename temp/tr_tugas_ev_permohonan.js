const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_tugas_ev_permohonan', {
    id_evp: {
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
      allowNull: false
    },
    tgl_tugas: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nip_pejabat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sts_print: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    kd_tempat: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    no_urut: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    sts_data: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nip_inspektur: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_tugas_ev_permohonan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_evp" },
        ]
      },
    ]
  });
};
