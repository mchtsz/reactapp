import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const updateItems = createSlice({
  name: "updateItems",
  initialState,
  reducers: {
    updateItemQuantity: (/* state, action */) => {},
  },
});

// Action creators are generated for each case reducer function
export const { updateItemQuantity } = updateItems.actions;

export default updateItems.reducer;
