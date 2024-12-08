import express from "express";
import {createClient} from "../controller/client.controller.js"

const router = express.Router();

// router.route("/update").put(updateClientDetails );
router.route("/create").post(createClient);


export default router; 