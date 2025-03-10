const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kesimpulan', {
    id_kesimpulan: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    kd_kesimpulan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kesimpulan: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kegiatan: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sts_syarat: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    id_disposisi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    id_sub_kategori: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_kesimpulan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_kesimpulan" },
        ]
      },
    ]
  });
};
