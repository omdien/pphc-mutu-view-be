import Tr_hc_mutu from "../models/tr_hc_mutu.js";
import Tr_hc_mutu_dtl from "../models/tr_hc_mutu_dtl.js";
import Tr_ppk from "../models/tr_ppk.js";
import Tr_ppk_mutu from "../models/tr_ppk_mutu.js";
import Tr_ppk_mutu_area from "../models/tr_ppk_mutu_area.js";
import Tr_ppk_container from "../models/tr_ppk_container.js";
import Tr_ppk_dtl from "../models/tr_ppk_dtl.js";
import Tb_r_upt from "../models/tb_r_upt.js";
import Tb_r_negara from "../models/tb_r_negara.js";
import Tb_r_pelabuhan from "../models/tb_r_pelabuhan.js";

// get HC
export const getHC = async (req, res) => {
  try {
    const response = await Tr_hc_mutu.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get HC by aju
export const getHcByAju = async (req, res) => {
  try {
    const response = await Tr_hc_mutu.findOne({
      where: {
        nomor_aju: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get HC Detail
export const getHcDtl = async (req, res) => {
  try {
    const response = await Tr_hc_mutu_dtl.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get HC Detail by aju
export const getHcDtlByAju = async (req, res) => {
  try {
    const response = await Tr_hc_mutu_dtl.findOne({
      where: {
        nomor_aju: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk
export const getPpk = async (req, res) => {
  try {
    const response = await Tr_ppk.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk by aju
export const getPpkByAju = async (req, res) => {
  try {
    const response = await Tr_ppk.findOne({
      where: {
        NOMOR_AJU: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk mutu by aju
export const getPpkMutuByAju = async (req, res) => {
  try {
    const response = await Tr_ppk_mutu.findOne({
      where: {
        NOMOR_AJU: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk mutu area by aju
export const getPpkMutuAreaByAju = async (req, res) => {
  try {
    const response = await Tr_ppk_mutu_area.findOne({
      where: {
        NOMOR_AJU: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk container by aju
export const getPpkContainerByAju = async (req, res) => {
  try {
    const response = await Tr_ppk_container.findOne({
      where: {
        NOMOR_AJU: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get ppk dtl by aju
export const getPpkDtlByAju = async (req, res) => {
  try {
    const response = await Tr_ppk_dtl.findAll({
      where: {
        NOMOR_AJU: req.params.noAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get upt by aju
export const getUptByAju = async (req, res) => {
  try {
    const response = await Tb_r_upt.findOne({
      where: {
        KD_UNIT: req.params.noUptAju,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get upt by aju
export const getNegaraByAju = async (req, res) => {
  try {
    const response = await Tb_r_negara.findOne({
      where: {
        KODE_NEGARA: req.params.kdNegara,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// get upt by aju
export const getPelabuhanByAju = async (req, res) => {
  try {
    const response = await Tb_r_pelabuhan.findOne({
      where: {
        KODE_PELABUHAN: req.params.kdPelabuhan,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export default getHC;