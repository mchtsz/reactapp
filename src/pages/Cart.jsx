import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./cart.css";
import CartItem from "../components/CartItem";

export default function Cart() {
  //const cartContext will be selected from global state
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="page-cart">
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
