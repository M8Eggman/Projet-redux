import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "../features/pizzaSlice";
import { reductionReducer } from "../features/reductionSlice.jsx"; 

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    reduction: reductionReducer,
  },
});

export default store;
