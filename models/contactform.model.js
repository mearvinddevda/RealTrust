// const mongoose = require("mongoose");
import mongoose from "mongoose";


const contactFormSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true },
	mobile: { type: String, required: true },
	city: { type: String, required: true },
},{ timestamps: true });

export const ContactForm= mongoose.model("ContactForm", contactFormSchema);
