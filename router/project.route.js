// const express = require('express');
// const multer = require('multer');
// const Project = require('../models/Project');
// const router = express.Router();

// // Set up file upload storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ storage });

// // Route for adding a new project
// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const image = req.file.filename;
//     const newProject = new Project({ name, description, image });
//     await newProject.save();
//     res.status(201).json(newProject);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Route to get all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

import express from "express";
import { createProject, updateProjectDetails } from "../controller/project.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/update").put(singleUpload ,updateProjectDetails );
router.route("/create").post(singleUpload ,createProject);


export default router; 
