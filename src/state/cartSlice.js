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

    updateCartItem: (state, action) => {
      // ta imot id og antall i format: {id: 12, quantity: 4}
      const itemId = action.payload.id;
      const itemQuantity = action.payload.quantity;

      const itemExists = state.items.find((item) => item.id === itemId);

      if (itemExists) {
        const oldQuantity = itemExists.quantity;
        const oldAmount = itemExists.price * oldQuantity;

        itemExists.quantity = itemQuantity;
        const addAmount = itemExists.price * itemQuantity;

        // Oppdater totalQuantity og totalAmount
        state.totalQuantity += itemQuantity - oldQuantity;
        state.totalAmount += addAmount - oldAmount;
      }
    },

    deleteItem: (state, action) => {
      const { id } = action.payload;

      const itemExists = state.items.find((item) => item.id === id);

      if (itemExists) {
        const quantityToRemove = itemExists.quantity;
        const priceToRemove = itemExists.price * quantityToRemove;

        state.totalAmount -= priceToRemove;

        state.totalQuantity -= quantityToRemove;

        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItemToCart, deleteItem, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
