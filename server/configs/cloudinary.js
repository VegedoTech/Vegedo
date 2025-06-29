import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Folder in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Optional custom filename
  },
});

// Create Multer upload middleware
const upload = multer({ storage });

// Export cloudinary instance and upload middleware
export { cloudinary, upload };
