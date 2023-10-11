import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import DashBoard from "../src/pages/DashBoard";
import Product from "../src/pages/Product";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path="/products" element={<Product />} />
      </Route>
    </Routes>
  );
}
