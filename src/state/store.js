import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import updateItems from "./updateItems";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    update: updateItems,
  },
});
