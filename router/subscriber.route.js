import express from "express";
import { createSubscriber } from "../controller/subscriber.controller.js";

const router = express.Router();

// router.route("/update").put(singleUpload ,updateProjectDetails );
router.route("/newsletter").post(createSubscriber);


export default router; 