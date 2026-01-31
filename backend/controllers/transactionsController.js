import Transaction from "../models/Transaction.js";
import Account from "../models/Account.js";

export const createTransaction = async (req, res) => {
  try {
    const { amount, type, account } = req.body;

    // 1️⃣ Create transaction
    const transaction = await Transaction.create(req.body);

    // 2️⃣ Find account
    const acc = await Account.findById(account);
    if (!acc) {
      return res.status(404).json({ message: "Account not found" });
    }

    // 3️⃣ Update balance
    if (type === "income") {
      acc.balance += amount;
    } else {
      acc.balance -= amount;
    }

    await acc.save();

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateTransaction = async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
