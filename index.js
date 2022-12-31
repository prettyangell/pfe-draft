import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// had zouj matdirich 3lihom c juste fel app.get hadik _dirname ki nkhdm b import au lieu require lzm ndir hadi
import path from "path";
import { fileURLToPath } from "url";

// Dotenv te3 .env te3 lpassword
dotenv.config();

// Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("draft"));

// Home route
app.get("/", (req, res) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  res.sendFile(path.join(__dirname, "/draft/draft.html"));
});

// Routes
import placeRouter from "./routes/place.js";
app.use("/api/v2/place", placeRouter);

// MongoDB connection
async function main_connectDB() {
  mongoose.set("strictQuery", true);
  try {
    mongoose.connect(process.env.mongodb_url);
    console.log("Connected DB with success !");
  } catch (error) {
    console.error("Error in DB connection");
  }
}

main_connectDB();

// Server connection
app.listen(3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
