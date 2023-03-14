import React from "react";
import "./components.css";
import CartContext from "../CartContext";
import { useContext } from "react";

function Addbtn() {
  return (
    <div className="add-to-cart-btn">
      <button className="Addbtn">Add to cart</button>
    </div>
  );
}

export default Addbtn;
