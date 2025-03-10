const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_ikan_satuan', {
    ID_SATUAN: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    KD_KELAS: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    KATEGORI_CMDTS: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    SATUAN: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    KODE_SATUAN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SATUAN_NSW: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    KODE_TARIF: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    KODE_JENIS_IKAN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_ikan_satuan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_SATUAN" },
        ]
      },
    ]
  });
};
