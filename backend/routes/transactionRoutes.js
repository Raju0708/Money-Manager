import express from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/", getTransactions);
router.post("/", createTransaction);
router.put("/:id", updateTransaction);

export default router;
