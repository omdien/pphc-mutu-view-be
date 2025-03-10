const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_partner_trader', {
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_PARTNER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    USER_CREATED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_partner_trader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_TRADER" },
          { name: "ID_PARTNER" },
        ]
      },
    ]
  });
};
