const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_disposisi', {
    id_disposisi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_disposisi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ket_disposisi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_table: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_field1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_field2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_urut: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    sts_msg: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    kd_dok: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    kd_respon: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kd_izin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nsw: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_aktif: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_disposisi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_disposisi" },
        ]
      },
    ]
  });
};
