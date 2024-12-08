import getDataUri from "../utils/datauri.js";
import {Client} from "../models/client.model.js"

export const createClient = async ( req ,res) =>{
	try {
		const {name , image , description , designation} = req.body ;
		if(!name , !image , !description , designation)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false,
			})
		}
		const img = image ;
		const imguri=getDataUri(img);
		const cloudinaryResponse = await cloudinary.uploader.upload(imguri.content);

		await Client.create({
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
