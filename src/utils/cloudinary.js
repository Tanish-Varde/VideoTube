import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import { ApiError } from './ApiError.js';


// configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath, { resource_type: 'auto' });
        await fs.unlink(filePath);
        return response;
    } catch (error) {
        fs.unlinkSync(filePath);
        throw new ApiError(500, error.message);
    }
};


export { uploadOnCloudinary };