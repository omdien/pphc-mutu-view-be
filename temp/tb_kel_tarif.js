const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kel_tarif', {
    kd_kel_tarif: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    nm_kel_tarif: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sts_aktif: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_kel_tarif',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kd_kel_tarif" },
        ]
      },
    ]
  });
};
