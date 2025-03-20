import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const registerUser = asyncHandler(async (req, res) => {

    console.log("Registering user...");
    const { username, email, fullname, password } = req.body;
    const { avatar, coverImage } = req.files;

    const data = {
        username,
        email,
        fullname,
        password,
        avatar: avatar[0].filename,
        coverImage: coverImage[0].filename
    }

    console.log(`User registered successfully !`);

    res.status(200).json(new ApiResponse(200, data, 'User registered successfully!'));
});


export { registerUser };