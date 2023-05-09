import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";


export default function ProductList({ searchQuery }) {
  const [displayableProducts, setDisplayableProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = displayableProducts.slice(firstPostIndex, lastPostIndex);

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
          return;
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
    <div className="Parent">
      <div className="productGrid">
        {currentPosts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        <Pagination
          totalPosts={displayableProducts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
