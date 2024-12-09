import { log } from "console";
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import projectRoute from "./router/project.route.js";
import connectDB from "./utils/db.js";
import clientRouter from "./router/client.route.js";
import subscriberRouter from "./router/subscriber.route.js";
import contactFormRouter from "./router/contactform.route.js";

const app = express();
dotenv.config({});

// Set CORS options
const corsOptions = {
  origin: process.env.CLIENT_URL || 'https://real-trust-front-end-y9p9.vercel.app', // Use an environment variable for flexibility
  credentials: true
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.use("/project", projectRoute);
app.use("/client", clientRouter);
app.use("/contactdetails", contactFormRouter);
app.use("/subscribe", subscriberRouter);

// Preflight CORS handling
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', corsOptions.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at port ${PORT}`);
});
