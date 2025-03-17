import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, password } = req.body;
    
});


export { registerUser };