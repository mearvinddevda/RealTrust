// const mongoose = require("mongoose");
import mongoose from "mongoose"
const projectSchema = new mongoose.Schema(
	{
		image: { type: String, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
