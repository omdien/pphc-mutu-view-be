const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_send_insw', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_kirim: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    wk_kirim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    respon_kirim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wk_respon: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_send_insw',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
