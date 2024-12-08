// const mongoose = require("mongoose");
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
	image: { type: String, required: true },
	name: { type: String, required: true },
	designation: { type: String, required: true },
	description: { type: String, required: true },
},{ timestamps: true });

export const Client = mongoose.model("Client", clientSchema);
