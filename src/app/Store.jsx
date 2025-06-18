import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "../features/pizzaSlice";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;
