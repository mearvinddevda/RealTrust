import express from "express";
import { getAllCients, GetContactDetails } from "../controller/contactform.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

// router.route("/update").put(updateClientDetails );
router.route("/create").post(singleUpload,GetContactDetails);

router.route("/getClients").get(getAllCients);




export default router; 