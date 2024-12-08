import { Project } from "../models/Project.model.js";
import getDataUri from "../utils/datauri.js";

export const updateProjectDetails = async (req, res) => {
	try {
		console.log(req.body);
		const { name, image, description } = req.body;
		console.log({ name, image, description });
		const img =image;


		
	} catch (error) {
		console.log("Error Occured : " + error);
	}
};

export const createProject = async ( req ,res) =>{
	try {
		const {name , image , description} = req.body ;
		if(!name , !image , !description)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false,
			})
		}
		const img = image ;
		const imguri=getDataUri(img);
		const cloudinaryResponse = await cloudinary.uploader.upload(imguri.content);

		await Project.create({
			name,
			description,
			image:cloudinaryResponse.secure_url,
		})

		return res.status(201).json({
			message:"Project is Created Successfully" ,
			success:true
		})
		
	} catch (error) {
		console.log(error);

	}
}
