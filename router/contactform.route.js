import express from "express";
import { GetContactDetails } from "../controller/contactform.controller.js";

const router = express.Router();

// router.route("/update").put(updateClientDetails );
router.route("/create").post(GetContactDetails);


export default router; 