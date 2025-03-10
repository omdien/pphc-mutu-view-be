import { Sequelize } from "sequelize";
import db_hc from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tb_r_pelabuhan = db_hc.define(
  "tb_r_pelabuhan", 
  {
    KODE_PELABUHAN: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    URAIAN_PELABUHAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JNS_PELABUHAN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    STS_PELABUHAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    Sequelize,
    tableName: 'tb_r_pelabuhan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KODE_PELABUHAN" },
          { name: "JNS_PELABUHAN" },
        ]
      },
      {
        name: "IDX_NM_PELABUHAN",
        using: "BTREE",
        fields: [
          { name: "URAIAN_PELABUHAN" },
        ]
      },
      {
        name: "STS_PELABUHAN",
        using: "BTREE",
        fields: [
          { name: "STS_PELABUHAN" },
        ]
      },
      {
        name: "JNS_PELABUHAN",
        using: "BTREE",
        fields: [
          { name: "JNS_PELABUHAN" },
        ]
      },
      {
        name: "KODE_PELABUHAN",
        using: "BTREE",
        fields: [
          { name: "KODE_PELABUHAN" },
        ]
      },
    ]
  });

  export default Tb_r_pelabuhan;
