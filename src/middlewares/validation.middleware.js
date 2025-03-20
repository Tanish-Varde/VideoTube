import { userSchema } from "../utils/schema.joi.js";
import { ApiError } from "../utils/ApiError.js";


const validateFiles = (req, res, next) => {
    console.log("Validating files...");

    if (!req.files?.avatar?.length || !req.files?.coverImage?.length) {
        return next(new ApiError(400, "Both avatar and coverImage are required!"));
    }

    next(); // Proceed if files are present
};


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