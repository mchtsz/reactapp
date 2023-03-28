import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
  //const cartContext will be selected from global state¨
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="page-cart">
      {cartItems.map((item) => {
        return (
          <div className="cart-item">
            <div className="cart-item-id row">id: {item.id}</div>
            <div className="cart-item-name row">{item.name}</div>
            <div className="cart-item-amount row">{item.quantity} stk</div>
            <div className="cart-item-price row">{item.price} kr</div>
            <div className="cart-item-image row">{item.img}</div>
          </div>
        );
      })}
    </div>
  );
}
