import { log } from "console";
import cors from 'cors';
import dotenv from "dotenv"
import express from "express";
import projectRoute from "./router/project.route.js"
import connectDB from "./utils/db.js";
import clientRouter from "./router/client.route.js"
import subscriberRouter from "./router/subscriber.route.js"
import contactFormRouter from "./router/contactform.route.js"
const app = express();
dotenv.config({});
const corsOptions = {
    origin:'https://real-trust-front-end-y9p9.vercel.app', // Specify the frontend origin explicitly
    credentials: true, // Allow credentials (cookies, headers, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only certain methods
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'] // Allow certain headers
  };
  app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://real-trust-front-end-y9p9.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(200).end();
  });  

app.get("/",(req,res)=>{
    res.status(200).send("hello")
})
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

//Use Routes

app.use("/project",projectRoute);
app.use("/client",clientRouter);
app.use("/contactdetails",contactFormRouter);
app.use("/subscribe",subscriberRouter);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server in running at fipr Heart at ${PORT}`);
    
})