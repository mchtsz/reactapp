import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, name, amount, price, image) => {
    const itemToAdd = {
      id: id,
      name: name,
      amount: amount,
      price: price,
      image: image,
    };

    const itemExists = items.find((item) => item.id === itemToAdd.id);

    console.log(itemExists);

    if (itemExists) {
      itemExists.amount += itemToAdd.amount;
    } else {
      setItems([...items, itemToAdd]);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
