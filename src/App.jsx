import React from 'react';
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  const [displayableProducts, setDisplayableProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const consumerKey = "ck_69c14889997405d3e0ce02e1ab5102884ee4cd80";
    const consumerSecret = "cs_ebf670481d88d4a5232ee480458c17dac9583e04";

    const url = "https://legacy.local/wp-json/wc/v3/products/";

    const requestOptions = {
      method: "GET",
      content: "application/json",
      headers: {
        Authorization: "Basic " + btoa(consumerKey + ":" + consumerSecret),
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (searchQuery === "") {
          setDisplayableProducts(data);
        } else {
          const filteredProducts = data.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          });

          setDisplayableProducts(filteredProducts);
        }
      })
      .catch((error) => console.error(error));
  }, [searchQuery]);



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
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>

        <div className="section">
          <div className="productGrid">
            {displayableProducts.map((product) => (
              <div key={product.id} className="product">
                <img className="product-image" src={product.images[0].src} alt={product.name} />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
