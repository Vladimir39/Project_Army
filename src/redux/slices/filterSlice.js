import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: "",
  categories: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCatigories(state, action) {
      console.log(action.payload);
      state.categories = action.payload;
      state.categoryId = "";
    },
    setCatigoriesId(state, action) {
      console.log(action.payload);
      state.categoryId = action.payload;
      state.categories = "";
    },
  },
});

export const { setCatigoriesId, setCatigories } = filterSlice.actions;

export default filterSlice.reducer;
