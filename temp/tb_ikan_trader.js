const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_ikan_trader', {
    KODE_TRADER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_IKAN: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    ID_IKAN_TRADER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tb_ikan_trader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_IKAN_TRADER" },
        ]
      },
    ]
  });
};
