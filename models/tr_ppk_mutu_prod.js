import { Sequelize } from "sequelize";
import db_hc from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tr_ppk_mutu_prod = db_hc.define(
  "tr_ppk_mutu_prod", {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    MUTU_PROD_SERI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MUTU_PROD_NO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MUTU_PROD_TGL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    Sequelize,
    tableName: 'tr_ppk_mutu_prod',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
          { name: "MUTU_PROD_SERI" },
        ]
      },
      {
        name: "NOMOR_AJU",
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
        ]
      },
    ]
  });

export default Tr_ppk_mutu_prod;
