import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";


const errorHandler = (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {

        const statusCode = error.statusCode || (error instanceof mongoose.Error ? 400 : 500);
        const message = error.message || (error instanceof mongoose.Error ? error.message : 'Something went wrong!');

        // Create a new ApiError instance
        error = new ApiError(statusCode, message, error?.errors || [], error.stack);
    };

    const response = {
        message: error.message,
        ...error,
        ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {}),
    };

    console.log(error);
    return res.status(error.statusCode).json(response);
};


export { errorHandler };