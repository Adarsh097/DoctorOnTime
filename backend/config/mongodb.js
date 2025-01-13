// Import mongoose, a MongoDB object modeling tool for Node.js, which helps interact with MongoDB databases
import mongoose from "mongoose";

// Define an asynchronous function to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Set up an event listener for the 'connected' event to log a message when the database connection is successful
        mongoose.connection.on('connected', () => console.log(`DATABASE Connected`));

        // Set up an event listener for the 'error' event to log any connection errors
        mongoose.connection.on('error', (err) => console.error(`DATABASE Connection Error: ${err}`));

        // Use mongoose to connect to the MongoDB database, with the URL taken from environment variables
        // and '/docontime' as the specific database name
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,         // Use the new URL parser to avoid deprecation warnings
            useUnifiedTopology: true,      // Use the new server discovery and monitoring engine
        });

        console.log("Database connection successful"); // Confirm successful connection

    } catch (error) {
        // Catch any errors during the connection attempt and log them
        console.error(`Failed to connect to database: ${error}`);
        process.exit(1); // Exit the process with a failure code
    }
};

// Export the connectDB function to be used in other parts of the application
export default connectDB;
