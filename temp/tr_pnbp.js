const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tr_pnbp', {
    id_pnbp: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomor_aju: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_pnbp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tgl_pnbp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pejabat: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    sts_data: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sts_print: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jns_pembayaran: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sts_pembayaran: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email_trd: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email_pj: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email_date_send: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attach: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email_sts: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tgl_pembukuan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    op: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tr_pnbp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pnbp" },
        ]
      },
    ]
  });
};
