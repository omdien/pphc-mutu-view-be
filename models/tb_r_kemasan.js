import { Sequelize } from "sequelize";
import db_hc from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tr_ppk = db_hc.define(
  "tr_ppk", {
  KODE_KEMASAN: {
    type: DataTypes.STRING(2),
    allowNull: false,
    primaryKey: true
  },
  URAIAN_KEMASAN: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  Sequelize,
  tableName: 'tb_r_kemasan',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "KODE_KEMASAN" },
      ]
    },
    {
      name: "IDX_NAMA_KEMASAN",
      using: "BTREE",
      fields: [
        { name: "URAIAN_KEMASAN" },
      ]
    },
  ]
});

export default Tr_ppk