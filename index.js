import { log } from "console";
import dotenv from "dotenv"
import express from "express";
import projectRoute from "./router/project.route.js"
import connectDB from "./utils/db.js";
import clientRouter from "./router/client.route.js"
import subscriberRouter from "./router/subscriber.route.js"
import contactFormRouter from "./router/contactform.route.js"
const app = express();
dotenv.config({});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

//Use Routes

app.use("/project",projectRoute);
app.use("/client",clientRouter);
app.use("/contactdetails",contactFormRouter);
app.use("/subscribe",subscriberRouter);


connectDB();
app.listen(PORT,()=>{
    console.log(`Server in running at fipr Heart at ${PORT}`);
    
})