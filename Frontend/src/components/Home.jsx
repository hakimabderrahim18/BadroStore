import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "iPhone 14", price: 999, image: "iphone.jpg" },
  { name: "Samsung Galaxy S23", price: 899, image: "iphone.jpg" },
  { name: "Google Pixel 7", price: 799, image: "iphone.jpg" }
];

export default function Home() {
  return (
    <div className="p-6 flex flex-wrap gap-6 justify-center">
      {products.map((p, idx) => <ProductCard key={idx} product={p} />)}
    </div>
  );
}
