import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import { CartProvider } from "./CartContext";
import ProductList from "./components/ProductList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <CartProvider>
        <div className="Content">
          <div className="header">
            <h1>Head</h1>
          </div>

          <div className="nav">
            <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>

          <div className="section" id="section">
            <ProductList searchQuery={searchQuery} />
          </div>

          <div className="footer">
            <h1>Footer</h1>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
