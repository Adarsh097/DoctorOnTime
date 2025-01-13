// Import Cloudinary and rename the default import to 'cloudinary' for convenience
import { v2 as cloudinary } from 'cloudinary';

// Define an asynchronous function to configure Cloudinary with environment variables
const connectCloudinary = async () => {
    try {
        // Validate that the required environment variables are set
        const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } = process.env;

        if (!CLOUDINARY_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_SECRET_KEY) {
            throw new Error('Missing Cloudinary configuration values');
        }

        // Configure Cloudinary with the provided credentials
        cloudinary.config({
            cloud_name: CLOUDINARY_NAME,
            api_key: CLOUDINARY_API_KEY,        // Use environment variable for API key
            api_secret: CLOUDINARY_SECRET_KEY,   // Use environment variable for API secret
        });

        console.log('Cloudinary configuration successful'); // Log successful configuration

    } catch (error) {
        // Log any errors that occur during the configuration process
        console.error(`Failed to connect to Cloudinary: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
};

// Export the connectCloudinary function to be used in other parts of the application
export default connectCloudinary;
