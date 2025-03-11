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
    getPpkKemasanByAju,
    getKemasan,
    getKemasanByKd,
    getPpkMutuProdByAju,
    getUptByAju,
    getNegaraByAju,
    getPelabuhanByAju
} from "../controllers/ViewController.js";

const router = express.Router();

router.get('/viewsmkhp/gethc', getHC);
router.get('/viewsmkhp/gethcbyaju/:noAju', getHcByAju);
router.get('/viewsmkhp/gethcdtl', getHcDtl);
router.get('/viewsmkhp/gethcdtlbyaju/:noAju', getHcDtlByAju);
router.get('/viewsmkhp/getppk', getPpk);
router.get('/viewsmkhp/getppkbyaju/:noAju', getPpkByAju);
router.get('/viewsmkhp/getppkmutubyaju/:noAju', getPpkMutuByAju);
router.get('/viewsmkhp/getppkmutuareabyaju/:noAju', getPpkMutuAreaByAju);
router.get('/viewsmkhp/getppkcontainerbyaju/:noAju', getPpkContainerByAju);
router.get('/viewsmkhp/getppkdtlbyaju/:noAju', getPpkDtlByAju);
router.get('/viewsmkhp/getppkkemasanbyaju/:noAju', getPpkKemasanByAju);
router.get('/viewsmkhp/getallkemasan', getKemasan);
router.get('/viewsmkhp/getkemasanbykd/:kdKemasan', getKemasanByKd);
router.get('/viewsmkhp/getppkmutuprodbyaju/:noAju', getPpkMutuProdByAju);
router.get('/viewsmkhp/getuptbyaju/:noUptAju', getUptByAju);
router.get('/viewsmkhp/getnegarabyaju/:kdNegara', getNegaraByAju);
router.get('/viewsmkhp/getpelabuhanbyaju/:kdPelabuhan', getPelabuhanByAju);

export default router;