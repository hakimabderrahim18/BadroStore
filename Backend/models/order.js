import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  product: {
    name: String,
    price: Number
  },
  quantity: Number,
  total: Number,
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
