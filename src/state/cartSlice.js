import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      //Forventer at action.payload er type: {id: 12, quantity: 4, name: "Headset", price: 1200, img: "https://www.google.com/bilde.jpg"}

      const itemToAdd = action.payload;

      const itemExists = state.items.find((item) => item.id === itemToAdd.id);

      if (itemExists) {
        itemExists.quantity += itemToAdd.quantity;
        state.totalQuantity += itemToAdd.quantity;
        state.totalAmount += itemToAdd.price * itemToAdd.quantity;
      } else {
        state.items.push(itemToAdd);
        state.totalQuantity += itemToAdd.quantity;
        state.totalAmount += itemToAdd.price * itemToAdd.quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
