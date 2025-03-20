import Joi from "joi";


const userSchema = Joi.object({

    username: Joi.string()
        .required()
        .min(3)
        .max(50)
        .alphanum(),

    email: Joi.string()
        .required()
        .email()
        .trim()
        .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),

    fullname: Joi.string()
        .required()
        .min(3)
        .max(50)
        .trim()
        .replace(/\s+/g, ''),  // Replaces multiple spaces with a single space

    password: Joi.string()
        .required()
        .min(6)
        .max(20)
        .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .messages({
            "string.pattern.base": "Password must contain at least one uppercase letter, one number, and one special character."
        })
});


export { userSchema };