import React from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";

export default function Shop() {
  const [searchQuery] = useState("");
  //const cartContext will be selected from global state
  return (
    <div className="section" id="section">
      <ProductList searchQuery={searchQuery} />
    </div>
  );
}
