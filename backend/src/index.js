import dotenv from "dotenv";
import connectDB from "./config/database.js";
import { application } from "express";
import app from "./app.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed!", error);
  }
};

startServer();
