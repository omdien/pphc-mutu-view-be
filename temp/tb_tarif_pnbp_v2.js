const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tarif_pnbp_v2', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    kd_tarif: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    nm_tarif: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    satuan: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tarif: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    kd_simponi: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    pembagi: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    status_aktif: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    },
    kd_akun: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_tarif_pnbp_v2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
