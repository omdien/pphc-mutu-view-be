const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_insw_realisasi_trader', {
    no_perijinan: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    trader_jns_id: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trader_no_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trader_npwp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    trader_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    trader_alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trader_kota: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    trader_provinsi: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    trader_kd_pos: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_insw_realisasi_trader',
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
