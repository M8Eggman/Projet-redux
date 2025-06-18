import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../data/pizzas.json";

const initialState = {
  allPizzas: pizzas,
  panier: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export const {} = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
