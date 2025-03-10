import { Sequelize } from "sequelize";
import db_hc from "../config/Database.js";
import e from "express";

const { DataTypes } = Sequelize;

const Tr_ppk_mutu_area = db_hc.define(
  "tr_ppk_mutu_area", {
    NOMOR_AJU: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    MUTU_AREA_SERI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MUTU_AREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MUTU_CULT_PROP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MUTU_CULT_KOTA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MUTU_TANGKAP_AREA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MUTU_BUDIDAYA_NAMA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MUTU_TANGKAP_KAPAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    Sequelize,
    tableName: 'tr_ppk_mutu_area',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOMOR_AJU" },
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

  export default Tr_ppk_mutu_area
