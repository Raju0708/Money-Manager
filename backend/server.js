// backend/server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

// Middlewares
app.use(cors({ origin: "*" })); // Replace "*" with your Vercel URL in production
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "your_mongo_connection_string_here";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
