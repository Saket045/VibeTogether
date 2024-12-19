import {signup,signin} from "../controller/userContoller.js";
import express from "express"
const router =express.Router();

router.route('/auth').post(signup).get(signin);

export default router;