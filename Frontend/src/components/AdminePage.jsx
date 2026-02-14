import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await axios.get("http://localhost:5000/orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="p-4 md:p-6 bg-black min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        Admin: All Orders
      </h1>

      {/* Responsive table wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-600 text-white text-sm md:text-base">
          <thead className="bg-gray-800">
            <tr>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Email</th>
              <th className="border px-3 py-2 text-left">Phone</th>
              <th className="border px-3 py-2 text-left">Product</th>
              <th className="border px-3 py-2 text-left">Quantity</th>
              <th className="border px-3 py-2 text-left">Total</th>
              <th className="border px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                <td className="border px-3 py-2">{order.customerName}</td>
                <td className="border px-3 py-2">{order.email}</td>
                <td className="border px-3 py-2">{order.phone}</td>
                <td className="border px-3 py-2">{order.product.name}</td>
                <td className="border px-3 py-2">{order.quantity}</td>
                <td className="border px-3 py-2">${order.total}</td>
                <td className="border px-3 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile hint */}
      <p className="mt-2 text-gray-400 text-xs md:text-sm">
        Scroll horizontally on mobile to see all columns
      </p>
    </div>
  );
}
