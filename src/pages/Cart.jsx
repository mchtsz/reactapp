import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./cart.css";

export default function Cart() {
  //const cartContext will be selected from global state
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="page-cart">
      {cartItems.map((item) => {
        return (
          <div className="cart-item">
            <div className="cart-item-delete row">SLETT</div>
            <button className="btn btn-success ">+</button>
            <input
              className="cart-item-input input-group-text"
              type="number"
              defaultValue={item.quantity}
              placeholder="Antall"
              required
            ></input>
            <button className="btn btn-danger ">-</button>
            <div className="cart-item-name row">{item.name}</div>
            <div className="cart-item-price row">{item.price} kr</div>
            <div className="cart-item-image row">{item.img}</div>
          </div>
        );
      })}
    </div>
  );
}
