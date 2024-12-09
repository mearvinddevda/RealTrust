import { Subscriber } from "../models/subscriber.model.js";

export const createSubscriber = async ( req ,res) =>{
	try {
		
		const {email} = req.body ;
		
		if(!email)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false,
			})
		}
		
		await Subscriber.create({
            email ,
            
		})

		return res.status(201).json({
			message:"Subsribed Newsletter Successfully" ,
			success:true
		})
		
	} catch (error) {
		console.log(error);

	}
}
