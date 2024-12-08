import mongoose from "mongoose";

const connectDB = async (req , res) =>{

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DataBase Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;