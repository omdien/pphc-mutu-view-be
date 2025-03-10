const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_jenis_hcm', {
    id_hcm: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    kd_hcm: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    uraian_hcm: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    kd_jns_produk: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_jenis_hcm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hcm" },
        ]
      },
    ]
  });
};
