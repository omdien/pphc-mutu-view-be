import express from "express";
import {
    getHC,
    getHcByAju,
    getHcDtl,
    getHcDtlByAju,
    getPpk,
    getPpkByAju,
    getPpkMutuByAju,
    getPpkMutuAreaByAju,
    getPpkContainerByAju,
    getPpkDtlByAju,
    getUptByAju,
    getNegaraByAju,
    getPelabuhanByAju
} from "../controllers/ViewController.js";

const router = express.Router();

router.get('/view/gethc', getHC);
router.get('/view/gethcbyaju/:noAju', getHcByAju);
router.get('/view/gethcdtl', getHcDtl);
router.get('/view/gethcdtlbyaju/:noAju', getHcDtlByAju);
router.get('/view/getppk', getPpk);
router.get('/view/getppkbyaju/:noAju', getPpkByAju);
router.get('/view/getppkmutubyaju/:noAju', getPpkMutuByAju);
router.get('/view/getppkmutuareabyaju/:noAju', getPpkMutuAreaByAju);
router.get('/view/getppkcontainerbyaju/:noAju', getPpkContainerByAju);
router.get('/view/getppkdtlbyaju/:noAju', getPpkDtlByAju);
router.get('/view/getuptbyaju/:noUptAju', getUptByAju);
router.get('/view/getnegarabyaju/:kdNegara', getNegaraByAju);
router.get('/view/getpelabuhanbyaju/:kdPelabuhan', getPelabuhanByAju);

export default router;