import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

export default function category() {
  const routeParams = useParams();
  const [filteredProducts, setProducts] = useState([]);

  //bruk fetch til å hente produktene i kategorien
  useEffect(() => {
    const consumerKey = "ck_69c14889997405d3e0ce02e1ab5102884ee4cd80";
    const consumerSecret = "cs_ebf670481d88d4a5232ee480458c17dac9583e04";

    const url = `https://legacy.local/wp-json/wc/v3/products?category=${routeParams.category}`;

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
        console.log(data);
        return data;
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className="section" id="section">
      <div className="productGrid">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
