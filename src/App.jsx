import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Category from "./pages/[category]";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <div className="Content">
        <div className="header">
          <h1>Head</h1>
        </div>

        <div className="nav">
          <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </div>

        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
