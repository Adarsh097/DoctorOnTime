// Import express, a minimal and flexible Node.js web application framework for building APIs and handling HTTP requests
import express from 'express';

// Import cors, a middleware that enables Cross-Origin Resource Sharing, allowing the server to accept requests from different origins
import cors from 'cors';

// Import dotenv to load environment variables from a .env file into process.env for secure configuration management
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

//! app config 
// Initialize an instance of the Express application
const app = express();

// Define the port the server will listen on, using the value from environment variables if available, otherwise defaulting to 4000
const port = process.env.PORT || 4000;

//* running the mongoDB sever
connectDB();

//* connecting to cloudinary server
connectCloudinary();


//! middlewares
// Enable parsing of incoming JSON payloads in requests, attaching the parsed data to req.body
app.use(express.json());

// Enable CORS, allowing the server to accept requests from different origins (necessary for APIs serving multiple clients)
app.use(cors());


//! api endpoints
// Define a GET endpoint at the root URL ('/'), responding with a message to indicate the API is working
app.get('/', (req, res) => {
    res.send(`API WORKING`);
});


//! mouting the admin api's
app.use('/api/admin',adminRouter);

//! mounting the doctor api's
app.use('/api/doctor',doctorRouter);

//! mouting the user's api
app.use('/api/user',userRouter);

//! start server
// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    // Log a message to the console confirming that the server is running and showing the port number
    console.log(`server is running on PORT: ${port}`);
});
