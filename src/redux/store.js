import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import order from "./slices/orderSlice";
import description from "./slices/descriptionSlice";

export const store = configureStore({
  reducer: {
    filter,
    order,
    description,
  },
});
