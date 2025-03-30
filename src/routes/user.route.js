import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { validateUser, validateFiles } from "../middlewares/validation.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();


router.route('/register')
    .post(
        upload.fields(
            [
                { name: 'avatar', maxCount: 1 },
                { name: 'coverImage', maxCount: 1 }
            ]
        ),
        validateFiles,  // middleware to validate files
        validateUser,   // middleware to validate user
        registerUser
    );


export { router as userRouter };