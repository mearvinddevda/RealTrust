import express from "express";
import { createSubscriber } from "../controller/subscriber.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

// router.route("/update").put(singleUpload ,updateProjectDetails );
router.route("/newsletter").post(singleUpload,createSubscriber);


export default router; 