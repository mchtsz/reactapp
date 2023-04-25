// eslint-disable-next-line
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const consumerKey = "ck_69c14889997405d3e0ce02e1ab5102884ee4cd80";
    const consumerSecret = "cs_ebf670481d88d4a5232ee480458c17dac9583e04";

    const url = "https://legacy.local/wp-json/wc/v3/products/categories";

    const requestOptions = {
      method: "GET",
      content: "application/json",
      headers: {
        Authorization: "Basic " + btoa(consumerKey + ":" + consumerSecret),
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(categories);

  return (
    <div className="section" id="section">
      <div className="categories-container">
        <ul className="categories-list"></ul>
      </div>
    </div>
  );
}
