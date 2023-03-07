import React from "react";
import "./components.css";

function Addbtn() {
  return (
    <div className="add-to-cart-btn">
      <button
        className="Addbtn"
        onClick={() => {
          console.log("Added to cart");
        }}>
        Add to cart
      </button>
    </div>
  );
}

export default Addbtn;
