// import { Project } from "../models/Project.model.js";
import getDataUri from "../utils/datauri.js";
import { ContactForm } from "../models/contactform.model.js";



export const GetContactDetails = async ( req ,res) =>{
	try {
		const {fullname , email , mobile ,city} = req.body ;
		if(!fullname , !email , !mobile ,!city)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false,
			})
		}	
		await ContactForm.create({
			fullname,
            email ,
            mobile,
            city
		})

		return res.status(201).json({
			message:"Contact Details Delivered Successfully" ,
			success:true
		})
		
	} catch (error) {
		console.log(error);

	}
}
