import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URL;

if (!MONGO_URI) {
  throw new Error("MONGODB_URL is not defined in .env");
}

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1); // exit if DB fails
  }
};

startServer();
