var DataTypes = require("sequelize").DataTypes;
var _new_table = require("./new_table");
var _tb_bentuk = require("./tb_bentuk");
var _tb_bhn_kemasan = require("./tb_bhn_kemasan");
var _tb_cara_angkut = require("./tb_cara_angkut");
var _tb_disposisi = require("./tb_disposisi");
var _tb_dokumen_wajib = require("./tb_dokumen_wajib");
var _tb_hasil_uji = require("./tb_hasil_uji");
var _tb_ikan_satuan = require("./tb_ikan_satuan");
var _tb_ikan_trader = require("./tb_ikan_trader");
var _tb_jenis_cnt = require("./tb_jenis_cnt");
var _tb_jenis_dok = require("./tb_jenis_dok");
var _tb_jenis_hcm = require("./tb_jenis_hcm");
var _tb_jenis_kegiatan = require("./tb_jenis_kegiatan");
var _tb_jenis_komoditi = require("./tb_jenis_komoditi");
var _tb_jenis_produk = require("./tb_jenis_produk");
var _tb_jenis_tarif = require("./tb_jenis_tarif");
var _tb_jenis_uji = require("./tb_jenis_uji");
var _tb_kartu_id = require("./tb_kartu_id");
var _tb_kecamatan = require("./tb_kecamatan");
var _tb_kecamatan_old = require("./tb_kecamatan_old");
var _tb_kel_tarif = require("./tb_kel_tarif");
var _tb_kelurahan = require("./tb_kelurahan");
var _tb_kelurahan_old = require("./tb_kelurahan_old");
var _tb_kesimpulan = require("./tb_kesimpulan");
var _tb_komponen_verlap = require("./tb_komponen_verlap");
var _tb_kota = require("./tb_kota");
var _tb_kota_old = require("./tb_kota_old");
var _tb_m_trader_dok = require("./tb_m_trader_dok");
var _tb_maksud_pengiriman = require("./tb_maksud_pengiriman");
var _tb_matauang = require("./tb_matauang");
var _tb_metode_lab = require("./tb_metode_lab");
var _tb_pegawai = require("./tb_pegawai");
var _tb_propinsi = require("./tb_propinsi");
var _tb_r_hs = require("./tb_r_hs");
var _tb_r_ikan = require("./tb_r_ikan");
var _tb_r_kemasan = require("./tb_r_kemasan");
var _tb_r_layanan = require("./tb_r_layanan");
var _tb_r_negara = require("./tb_r_negara");
var _tb_r_partner = require("./tb_r_partner");
var _tb_r_partner_copy = require("./tb_r_partner_copy");
var _tb_r_pelabuhan = require("./tb_r_pelabuhan");
var _tb_r_trader = require("./tb_r_trader");
var _tb_r_upi = require("./tb_r_upi");
var _tb_r_upt = require("./tb_r_upt");
var _tb_role = require("./tb_role");
var _tb_status_dokumen = require("./tb_status_dokumen");
var _tb_tarif_pnbp = require("./tb_tarif_pnbp");
var _tb_tarif_pnbp_v2 = require("./tb_tarif_pnbp_v2");
var _tb_temperatur = require("./tb_temperatur");
var _tb_trader_alamat = require("./tb_trader_alamat");
var _tb_trader_dok = require("./tb_trader_dok");
var _tb_trader_upt = require("./tb_trader_upt");
var _tb_type_cnt = require("./tb_type_cnt");
var _tb_ukuran_cnt = require("./tb_ukuran_cnt");
var _tb_upi_register = require("./tb_upi_register");
var _tb_user = require("./tb_user");
var _tb_wpp = require("./tb_wpp");
var _tb_zonasi = require("./tb_zonasi");
var _tr_dtl_hasil_organo = require("./tr_dtl_hasil_organo");
var _tr_dtl_pnbp = require("./tr_dtl_pnbp");
var _tr_dtl_pnbp_billing = require("./tr_dtl_pnbp_billing");
var _tr_hasil_ev_permohonan = require("./tr_hasil_ev_permohonan");
var _tr_hasil_organo = require("./tr_hasil_organo");
var _tr_hasil_ver_lapangan = require("./tr_hasil_ver_lapangan");
var _tr_hc_mutu = require("./tr_hc_mutu");
var _tr_hc_mutu_dtl = require("./tr_hc_mutu_dtl");
var _tr_insw_realisasi_header = require("./tr_insw_realisasi_header");
var _tr_insw_realisasi_json = require("./tr_insw_realisasi_json");
var _tr_insw_realisasi_komoditi = require("./tr_insw_realisasi_komoditi");
var _tr_insw_realisasi_referensi = require("./tr_insw_realisasi_referensi");
var _tr_insw_realisasi_trader = require("./tr_insw_realisasi_trader");
var _tr_insw_realisasi_transport = require("./tr_insw_realisasi_transport");
var _tr_kurs = require("./tr_kurs");
var _tr_partner_trader = require("./tr_partner_trader");
var _tr_penugasan = require("./tr_penugasan");
var _tr_penugasan_detil = require("./tr_penugasan_detil");
var _tr_pnbp = require("./tr_pnbp");
var _tr_pnbp_billing = require("./tr_pnbp_billing");
var _tr_ppk = require("./tr_ppk");
var _tr_ppk_container = require("./tr_ppk_container");
var _tr_ppk_dok = require("./tr_ppk_dok");
var _tr_ppk_dtl = require("./tr_ppk_dtl");
var _tr_ppk_kemasan = require("./tr_ppk_kemasan");
var _tr_ppk_mutu = require("./tr_ppk_mutu");
var _tr_ppk_mutu_area = require("./tr_ppk_mutu_area");
var _tr_ppk_mutu_prod = require("./tr_ppk_mutu_prod");
var _tr_send_insw = require("./tr_send_insw");
var _tr_tugas_ev_permohonan = require("./tr_tugas_ev_permohonan");
var _tr_tugas_organo = require("./tr_tugas_organo");
var _tr_tugas_ver_lapangan = require("./tr_tugas_ver_lapangan");
var _tr_upi_reg = require("./tr_upi_reg");
var _tr_upi_trader = require("./tr_upi_trader");

function initModels(sequelize) {
  var new_table = _new_table(sequelize, DataTypes);
  var tb_bentuk = _tb_bentuk(sequelize, DataTypes);
  var tb_bhn_kemasan = _tb_bhn_kemasan(sequelize, DataTypes);
  var tb_cara_angkut = _tb_cara_angkut(sequelize, DataTypes);
  var tb_disposisi = _tb_disposisi(sequelize, DataTypes);
  var tb_dokumen_wajib = _tb_dokumen_wajib(sequelize, DataTypes);
  var tb_hasil_uji = _tb_hasil_uji(sequelize, DataTypes);
  var tb_ikan_satuan = _tb_ikan_satuan(sequelize, DataTypes);
  var tb_ikan_trader = _tb_ikan_trader(sequelize, DataTypes);
  var tb_jenis_cnt = _tb_jenis_cnt(sequelize, DataTypes);
  var tb_jenis_dok = _tb_jenis_dok(sequelize, DataTypes);
  var tb_jenis_hcm = _tb_jenis_hcm(sequelize, DataTypes);
  var tb_jenis_kegiatan = _tb_jenis_kegiatan(sequelize, DataTypes);
  var tb_jenis_komoditi = _tb_jenis_komoditi(sequelize, DataTypes);
  var tb_jenis_produk = _tb_jenis_produk(sequelize, DataTypes);
  var tb_jenis_tarif = _tb_jenis_tarif(sequelize, DataTypes);
  var tb_jenis_uji = _tb_jenis_uji(sequelize, DataTypes);
  var tb_kartu_id = _tb_kartu_id(sequelize, DataTypes);
  var tb_kecamatan = _tb_kecamatan(sequelize, DataTypes);
  var tb_kecamatan_old = _tb_kecamatan_old(sequelize, DataTypes);
  var tb_kel_tarif = _tb_kel_tarif(sequelize, DataTypes);
  var tb_kelurahan = _tb_kelurahan(sequelize, DataTypes);
  var tb_kelurahan_old = _tb_kelurahan_old(sequelize, DataTypes);
  var tb_kesimpulan = _tb_kesimpulan(sequelize, DataTypes);
  var tb_komponen_verlap = _tb_komponen_verlap(sequelize, DataTypes);
  var tb_kota = _tb_kota(sequelize, DataTypes);
  var tb_kota_old = _tb_kota_old(sequelize, DataTypes);
  var tb_m_trader_dok = _tb_m_trader_dok(sequelize, DataTypes);
  var tb_maksud_pengiriman = _tb_maksud_pengiriman(sequelize, DataTypes);
  var tb_matauang = _tb_matauang(sequelize, DataTypes);
  var tb_metode_lab = _tb_metode_lab(sequelize, DataTypes);
  var tb_pegawai = _tb_pegawai(sequelize, DataTypes);
  var tb_propinsi = _tb_propinsi(sequelize, DataTypes);
  var tb_r_hs = _tb_r_hs(sequelize, DataTypes);
  var tb_r_ikan = _tb_r_ikan(sequelize, DataTypes);
  var tb_r_kemasan = _tb_r_kemasan(sequelize, DataTypes);
  var tb_r_layanan = _tb_r_layanan(sequelize, DataTypes);
  var tb_r_negara = _tb_r_negara(sequelize, DataTypes);
  var tb_r_partner = _tb_r_partner(sequelize, DataTypes);
  var tb_r_partner_copy = _tb_r_partner_copy(sequelize, DataTypes);
  var tb_r_pelabuhan = _tb_r_pelabuhan(sequelize, DataTypes);
  var tb_r_trader = _tb_r_trader(sequelize, DataTypes);
  var tb_r_upi = _tb_r_upi(sequelize, DataTypes);
  var tb_r_upt = _tb_r_upt(sequelize, DataTypes);
  var tb_role = _tb_role(sequelize, DataTypes);
  var tb_status_dokumen = _tb_status_dokumen(sequelize, DataTypes);
  var tb_tarif_pnbp = _tb_tarif_pnbp(sequelize, DataTypes);
  var tb_tarif_pnbp_v2 = _tb_tarif_pnbp_v2(sequelize, DataTypes);
  var tb_temperatur = _tb_temperatur(sequelize, DataTypes);
  var tb_trader_alamat = _tb_trader_alamat(sequelize, DataTypes);
  var tb_trader_dok = _tb_trader_dok(sequelize, DataTypes);
  var tb_trader_upt = _tb_trader_upt(sequelize, DataTypes);
  var tb_type_cnt = _tb_type_cnt(sequelize, DataTypes);
  var tb_ukuran_cnt = _tb_ukuran_cnt(sequelize, DataTypes);
  var tb_upi_register = _tb_upi_register(sequelize, DataTypes);
  var tb_user = _tb_user(sequelize, DataTypes);
  var tb_wpp = _tb_wpp(sequelize, DataTypes);
  var tb_zonasi = _tb_zonasi(sequelize, DataTypes);
  var tr_dtl_hasil_organo = _tr_dtl_hasil_organo(sequelize, DataTypes);
  var tr_dtl_pnbp = _tr_dtl_pnbp(sequelize, DataTypes);
  var tr_dtl_pnbp_billing = _tr_dtl_pnbp_billing(sequelize, DataTypes);
  var tr_hasil_ev_permohonan = _tr_hasil_ev_permohonan(sequelize, DataTypes);
  var tr_hasil_organo = _tr_hasil_organo(sequelize, DataTypes);
  var tr_hasil_ver_lapangan = _tr_hasil_ver_lapangan(sequelize, DataTypes);
  var tr_hc_mutu = _tr_hc_mutu(sequelize, DataTypes);
  var tr_hc_mutu_dtl = _tr_hc_mutu_dtl(sequelize, DataTypes);
  var tr_insw_realisasi_header = _tr_insw_realisasi_header(sequelize, DataTypes);
  var tr_insw_realisasi_json = _tr_insw_realisasi_json(sequelize, DataTypes);
  var tr_insw_realisasi_komoditi = _tr_insw_realisasi_komoditi(sequelize, DataTypes);
  var tr_insw_realisasi_referensi = _tr_insw_realisasi_referensi(sequelize, DataTypes);
  var tr_insw_realisasi_trader = _tr_insw_realisasi_trader(sequelize, DataTypes);
  var tr_insw_realisasi_transport = _tr_insw_realisasi_transport(sequelize, DataTypes);
  var tr_kurs = _tr_kurs(sequelize, DataTypes);
  var tr_partner_trader = _tr_partner_trader(sequelize, DataTypes);
  var tr_penugasan = _tr_penugasan(sequelize, DataTypes);
  var tr_penugasan_detil = _tr_penugasan_detil(sequelize, DataTypes);
  var tr_pnbp = _tr_pnbp(sequelize, DataTypes);
  var tr_pnbp_billing = _tr_pnbp_billing(sequelize, DataTypes);
  var tr_ppk = _tr_ppk(sequelize, DataTypes);
  var tr_ppk_container = _tr_ppk_container(sequelize, DataTypes);
  var tr_ppk_dok = _tr_ppk_dok(sequelize, DataTypes);
  var tr_ppk_dtl = _tr_ppk_dtl(sequelize, DataTypes);
  var tr_ppk_kemasan = _tr_ppk_kemasan(sequelize, DataTypes);
  var tr_ppk_mutu = _tr_ppk_mutu(sequelize, DataTypes);
  var tr_ppk_mutu_area = _tr_ppk_mutu_area(sequelize, DataTypes);
  var tr_ppk_mutu_prod = _tr_ppk_mutu_prod(sequelize, DataTypes);
  var tr_send_insw = _tr_send_insw(sequelize, DataTypes);
  var tr_tugas_ev_permohonan = _tr_tugas_ev_permohonan(sequelize, DataTypes);
  var tr_tugas_organo = _tr_tugas_organo(sequelize, DataTypes);
  var tr_tugas_ver_lapangan = _tr_tugas_ver_lapangan(sequelize, DataTypes);
  var tr_upi_reg = _tr_upi_reg(sequelize, DataTypes);
  var tr_upi_trader = _tr_upi_trader(sequelize, DataTypes);

  tr_ppk.belongsTo(tb_r_pelabuhan, { as: "PELABUHAN_MUAT_tb_r_pelabuhan", foreignKey: "PELABUHAN_MUAT"});
  tb_r_pelabuhan.hasMany(tr_ppk, { as: "tr_ppks", foreignKey: "PELABUHAN_MUAT"});
  tr_ppk.belongsTo(tb_r_pelabuhan, { as: "PELABUHAN_BONGKAR_tb_r_pelabuhan", foreignKey: "PELABUHAN_BONGKAR"});
  tb_r_pelabuhan.hasMany(tr_ppk, { as: "PELABUHAN_BONGKAR_tr_ppks", foreignKey: "PELABUHAN_BONGKAR"});
  tr_ppk.belongsTo(tb_r_upt, { as: "KODE_UPT_tb_r_upt", foreignKey: "KODE_UPT"});
  tb_r_upt.hasMany(tr_ppk, { as: "tr_ppks", foreignKey: "KODE_UPT"});

  return {
    new_table,
    tb_bentuk,
    tb_bhn_kemasan,
    tb_cara_angkut,
    tb_disposisi,
    tb_dokumen_wajib,
    tb_hasil_uji,
    tb_ikan_satuan,
    tb_ikan_trader,
    tb_jenis_cnt,
    tb_jenis_dok,
    tb_jenis_hcm,
    tb_jenis_kegiatan,
    tb_jenis_komoditi,
    tb_jenis_produk,
    tb_jenis_tarif,
    tb_jenis_uji,
    tb_kartu_id,
    tb_kecamatan,
    tb_kecamatan_old,
    tb_kel_tarif,
    tb_kelurahan,
    tb_kelurahan_old,
    tb_kesimpulan,
    tb_komponen_verlap,
    tb_kota,
    tb_kota_old,
    tb_m_trader_dok,
    tb_maksud_pengiriman,
    tb_matauang,
    tb_metode_lab,
    tb_pegawai,
    tb_propinsi,
    tb_r_hs,
    tb_r_ikan,
    tb_r_kemasan,
    tb_r_layanan,
    tb_r_negara,
    tb_r_partner,
    tb_r_partner_copy,
    tb_r_pelabuhan,
    tb_r_trader,
    tb_r_upi,
    tb_r_upt,
    tb_role,
    tb_status_dokumen,
    tb_tarif_pnbp,
    tb_tarif_pnbp_v2,
    tb_temperatur,
    tb_trader_alamat,
    tb_trader_dok,
    tb_trader_upt,
    tb_type_cnt,
    tb_ukuran_cnt,
    tb_upi_register,
    tb_user,
    tb_wpp,
    tb_zonasi,
    tr_dtl_hasil_organo,
    tr_dtl_pnbp,
    tr_dtl_pnbp_billing,
    tr_hasil_ev_permohonan,
    tr_hasil_organo,
    tr_hasil_ver_lapangan,
    tr_hc_mutu,
    tr_hc_mutu_dtl,
    tr_insw_realisasi_header,
    tr_insw_realisasi_json,
    tr_insw_realisasi_komoditi,
    tr_insw_realisasi_referensi,
    tr_insw_realisasi_trader,
    tr_insw_realisasi_transport,
    tr_kurs,
    tr_partner_trader,
    tr_penugasan,
    tr_penugasan_detil,
    tr_pnbp,
    tr_pnbp_billing,
    tr_ppk,
    tr_ppk_container,
    tr_ppk_dok,
    tr_ppk_dtl,
    tr_ppk_kemasan,
    tr_ppk_mutu,
    tr_ppk_mutu_area,
    tr_ppk_mutu_prod,
    tr_send_insw,
    tr_tugas_ev_permohonan,
    tr_tugas_organo,
    tr_tugas_ver_lapangan,
    tr_upi_reg,
    tr_upi_trader,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
