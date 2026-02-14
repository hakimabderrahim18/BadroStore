import React, { useState } from "react";
import axios from "axios";

export default function OrderForm({ product, onClose }) {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/orders", {
        ...form,
        product,
        total: form.quantity * product.price
      });
      alert("Order placed!");
      onClose();
    } catch (err) {
      alert("Error placing order");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className=" p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">{product.name} Order</h2>
        <input name="customerName" placeholder="Full Name" onChange={handleChange} required className="mb-2 w-full border p-2 rounded"/>
        <input name="phone" placeholder="Phone" onChange={handleChange} required className="mb-2 w-full border p-2 rounded"/>
        <textarea name="address" placeholder="Address" onChange={handleChange} required className="mb-2 w-full border p-2 rounded"/>
        <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} className="mb-2 w-full border p-2 rounded"/>
        <button type="submit" className="bg-black  py-2 w-full rounded">Place Order</button>
        <button type="button" onClick={onClose} className="mt-2 w-full border py-2 rounded">Cancel</button>
      </form>
    </div>
  );
}
