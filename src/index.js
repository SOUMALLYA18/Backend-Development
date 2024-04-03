import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env", // Assuming your .env file is located in the "env" directory and named ".env"
});
connectDB();
