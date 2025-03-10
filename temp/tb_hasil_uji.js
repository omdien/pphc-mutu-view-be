const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_hasil_uji', {
    id_target: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kd_target: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    target_uji: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    jenis_uji: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_singkat: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    jns_target: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_hasil_uji',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_target" },
        ]
      },
    ]
  });
};
