import React from "react";
import Addbtn from "./Addbtn";


function Product({ product }) {

  return (
    <div key={product.id} className="product">
      <div className="products-container">
        <img
          className="product-image"
          src={product.images[0].src}
          alt={product.name}
        />
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">{product.price} kr</p>
      </div>

      <Addbtn product={product} />
    </div>
  );
}

export default Product;
