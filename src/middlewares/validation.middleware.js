import { userSchema } from "../utils/schema.joi.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from 'fs';


const validateFiles = asyncHandler(async (req, res, next) => {
    console.log("Validating files...");

    if (!req.files || !req.files?.avatar?.length || !req.files?.coverImage?.length) {

        if (req.files?.avatar?.[0]?.path) {  // check if avatar is present and delete
            fs.unlink(req.files.avatar[0].path, (err) => {
                if (err) {
                    console.error("Error deleting avatar file:", err.message);
                } else {
                    console.log("Deleted avatar file:", req.files.avatar[0].path);
                }
            });
        }


        if (req.files?.coverImage?.[0]?.path) {  // check if coverImage is present and delete
            fs.unlink(req.files.coverImage[0].path, (err) => {
                if (err) {
                    console.error("Error deleting coverImage file:", err.message);
                } else {
                    console.log("Deleted coverImage file:", req.files.coverImage[0].path);
                }
            });
        }

        return next(new ApiError(400, "Both avatar and coverImage are required!"));
    }

    next(); // Proceed if files are present
});


const validateUser = (req, res, next) => {
    console.log("Validating user...");
    const { error } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        throw new ApiError(400, error.message);
    } else {
        next();
    }
};


export { validateUser, validateFiles };