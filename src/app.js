import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();


app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(express.static('public'));



// Import routes
import { healthCheckRouter } from "./routes/healthcheck.route.js";
import { userRouter } from "./routes/user.route.js";


// routes
app.use('/api/v1/healthcheck', healthCheckRouter);
app.use('/api/v1/user', userRouter);


// error handling middleware
app.use(errorHandler);


export { app };