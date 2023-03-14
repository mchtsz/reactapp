import { useContext } from "react";
import CartContext from "../CartContext";
import "./Cart.css";

export default function Cart() {
  const cartContext = useContext(CartContext);
  console.log(cartContext);

  return (
    <div className="page-cart">
      {cartContext.items.map((item) => {
        return (
          <div className="cart-item">
            <div className="cart-item-name">id: {item.id}</div>
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-name">{item.amount} stk</div>
            <div className="cart-item-price">{item.price}</div>
            <div className="cart-item-price">{item.image}</div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
