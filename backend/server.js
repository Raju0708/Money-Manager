import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import transactionRoutes from "./routes/transactionRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express(); // ✅ MUST be before app.use

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);
app.use("/api/accounts", accountRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/money-manager")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch(console.error);
