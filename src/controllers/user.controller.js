import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser = asyncHandler(async (req, res) => {

    const { username, email, fullname, password } = req.body;
    const { avatar, coverImage } = req.files;


    const existedUser = await User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });

    if (existedUser) {
        throw new ApiError(409, 'User already exists!');
    };


    const avatarUrl = await uploadOnCloudinary(avatar[0].path);
    const coverImageUrl = await uploadOnCloudinary(coverImage[0].path);


    let user = await User.create({
        username: username.toLowerCase(),
        email,
        fullname,
        password,
        avatar: avatarUrl?.url || "",
        coverImage: coverImageUrl?.url || ""
    });

    console.log(user);


    const createdUser = await User.findById(user._id).select('-password -watchHistory');

    if (!createdUser) {
        throw new ApiError(500, 'Something went wrong!');
    };

    console.log('User registered successfully!');
    res.status(200).json(new ApiResponse(200, createdUser, 'User registered successfully!'));
});


export { registerUser };