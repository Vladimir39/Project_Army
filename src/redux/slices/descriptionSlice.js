import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    addItemsDescriptions(state, action) {
      state.items.push(action.payload);
    },
    clearDicriptions(state, actions) {
      state.items = [];
    },
  },
});

export const { addItemsDescriptions, clearDicriptions } =
  descriptionSlice.actions;
export default descriptionSlice.reducer;
