// import { Project } from "../models/Project.model.js";
import getDataUri from "../utils/datauri.js";
import { ContactForm } from "../models/contactform.model.js";



export const GetContactDetails = async ( req ,res) =>{
	try {
		const {fullName , email , mobile ,city} = req.body ;
		if(!fullName , !email , !mobile ,!city)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false,
			})
		}	
		await ContactForm.create({
			fullName,
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
};

export const getAllCients = async (req, res) => {
	try {
	  
	  const client = await ContactForm.find();
	  if (!client) {
		return res.status(404).json({
		  message: "Clients not Found",
		  success: false,
		});
	  }
	  return res.status(200).json({
		client,
		success: true,
	  });
	} catch (error) {
	  console.log(error);
	}
  };
