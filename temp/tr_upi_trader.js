const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_upi_trader', {
    ID_UPI_TRADER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UPI_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UPI_REG_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UPI_STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'tr_upi_trader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_UPI_TRADER" },
        ]
      },
    ]
  });
};
