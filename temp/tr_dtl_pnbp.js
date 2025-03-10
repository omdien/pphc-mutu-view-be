const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_dtl_pnbp', {
    id_dtl_pnbp: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_pnbp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kode_tarif: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    satuan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pembagi: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    total_tarif: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_dtl_pnbp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dtl_pnbp" },
        ]
      },
    ]
  });
};
