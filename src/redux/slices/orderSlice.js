import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemAmount: 0,
  itemPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItems(state, action) {
      const data = state.items.find((obj) => obj.id === action.payload.id);
      if (!data) {
        state.items.push(action.payload);
      }
      state.items = state.items.map((item) => ({
        ...item,
        statusBoolean: false,
      }));
    },
    statusItemCard(state, action) {},
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { addItems, removeItems, statusItemCard } = orderSlice.actions;

export default orderSlice.reducer;
