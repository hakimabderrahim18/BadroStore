import express from "express";
import Order from "../models/order.js";

const router = express.Router();

// Create order
router.post("/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders (optional for admin)
router.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

export default router;
