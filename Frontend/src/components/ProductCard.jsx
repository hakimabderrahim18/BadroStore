import React, { useState } from "react";
import OrderForm from "./OrderForm";

export default function ProductCard({ product }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="card  shadow-lg rounded-lg p-4 w-64">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
      <h2 className="text-lg font-bold mt-2 text-black">{product.name}</h2>
      
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => setShowForm(true)}
        className="mt-2 w-full bg-black  py-2 rounded"
      >
        Order
      </button>

      {showForm && <OrderForm product={product} onClose={() => setShowForm(false)} />}
    </div>
  );
}
