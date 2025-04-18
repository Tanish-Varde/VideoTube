import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectMongoDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n  MongoDB connected successfully ! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export { connectMongoDb };