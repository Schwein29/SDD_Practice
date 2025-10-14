import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://5BTICS:KKzrzhhsG3wr63nr@cluster0.lynhzlh.mongodb.net/";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Succesfully")
    } catch (error) {
        console.error("Mongo DB Connection Failed") 
    }
};