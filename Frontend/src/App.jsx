import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/NavBAr";
import Admin from "./components/AdminePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
