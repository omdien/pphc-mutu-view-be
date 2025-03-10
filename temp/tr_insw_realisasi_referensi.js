const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_insw_realisasi_referensi', {
    no_perijinan: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    no_dok: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_dok: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kd_dok: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    penerbit: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    neg_penerbit: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    url_dok: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_insw_realisasi_referensi',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no_perijinan" },
        ]
      },
    ]
  });
};
