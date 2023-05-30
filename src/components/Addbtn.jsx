import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../state/cartSlice";

const Addbtn = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(
          addItemToCart({
            id: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
            img: product.images[0].src,
          })
        );
      }}
      className="Addbtn"
    >
      Legg til handlevogn
    </button>
  );
};

export default Addbtn;
