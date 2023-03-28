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
            <div className="cart-item-id row">id: {item.id}</div>
            <div className="cart-item-name row">{item.name}</div>
            <div className="cart-item-amount row">{item.amount} stk</div>
            <div className="cart-item-price row">{item.price} kr</div>
            <div className="cart-item-image row">{item.image}</div>
          </div>
        );
      })}
    </div>
  );
}
