import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const healthCheck = asyncHandler(async (req, res, next) => {
    console.log('Health check endpoint called');
    return res.status(200).json(new ApiResponse(200, 'OK', 'Server is running!'));
});


export { healthCheck };




// healthCheck = async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next);
//     } catch (error) {
//         next(error);
//     }
// }

// requestHandler = async (req, res, next) => {
//     console.log('Health check endpoint called');
//     return res.status(200).json(new ApiResponse(200, 'OK', 'Server is running!'));
// }