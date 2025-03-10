const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_metode_lab', {
    id_metode_p15: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    metode_uji: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    kel_uji: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_jenis_uji: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    kd_tarif: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_metode_lab',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_metode_p15" },
        ]
      },
    ]
  });
};
