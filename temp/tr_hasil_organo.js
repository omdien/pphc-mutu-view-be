const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_hasil_organo', {
    id_hasil_organo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_organo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_hasil_organo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_hasil_organo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tgl_uji_organo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ket: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    tanda_lain: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    id_kesimpulan: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ket_kesimpulan: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    penandatangan: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    disposisi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sts_data: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_print: {
      type: DataTypes.CHAR(1),
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
    tableName: 'tr_hasil_organo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hasil_organo" },
        ]
      },
    ]
  });
};
