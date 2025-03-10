const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_upi_register', {
    UPI_REG_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UPI_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    KODE_TRADER: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    UPI_REG_NEG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UPI_REG_NO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPI_REG_TGL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UPI_REG_ZONASI: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    UPI_REG_NO_UE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UPI_STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'tb_upi_register',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UPI_REG_ID" },
        ]
      },
    ]
  });
};
