import multer from "multer";

// Configure storage settings for multer using diskStorage
const storage = multer.diskStorage({
    // Define the function to determine the filename when uploading
    filename: (req, file, callback) => {
        // Ensure the filename is unique by appending a timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalName = file.originalname.split('.')[0]; // Get original name without extension
        const fileExtension = file.originalname.split('.').pop(); // Get file extension

        // Construct the new filename
        const newFilename = `${originalName}-${uniqueSuffix}.${fileExtension}`;
        callback(null, newFilename); // Pass the new filename to the callback
    }
});

// Define file filter to accept only specific file types
const fileFilter = (req, file, callback) => {
    // Accept images only (you can customize this to accept other file types)
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValid = allowedTypes.test(file.mimetype);
    
    if (isValid) {
        callback(null, true); // Accept the file
    } else {
        callback(new Error('Invalid file type. Only images are allowed!'), false); // Reject the file
    }
};

// Create an upload instance using multer with storage and file filter options
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
    // fileFilter
});

// Export the upload instance for use in other modules
export default upload;










