import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../state/cartSlice";
/* import { useDispatch } from "react-redux"; */

export default function CartItem({ item }) {
  const itemQuantity = item.quantity;
  const itemPrice = item.price;
  const itemTotal = itemQuantity * itemPrice;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(itemQuantity);

  /* const dispatch = useDispatch(); */

  return (
    <div className="cart-item">
      <div className="slett row">
        <button className="deletebtn">
          <BsTrashFill />
        </button>
      </div>
      <div className="wrap">
        <button
          className="btn btn-light"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch(updateCartItem({ id: item.id, quantity: quantity + 1 }));
          }}
        >
          +
        </button>
        <input
          className="cart-item-input input-group-text"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Antall"
          required
        ></input>
        <button
          className="btn btn-light "
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
              dispatch(updateCartItem({ id: item.id, quantity: quantity - 1 }));
            }
          }}
        >
          -
        </button>
      </div>
      <div className="cart-item-name row">{item.name}</div>
      <div className="cart-item-price">{itemTotal} kr</div>
      <div className="cart-item-image row">{item.img}</div>
    </div>
  );
}
