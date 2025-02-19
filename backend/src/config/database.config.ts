import mongoose from "mongoose";
import { config } from "./app.config";

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.error("Error connecting to Mongo DB", error);
        process.exit(1);
    }
};

export default connectDatabase;