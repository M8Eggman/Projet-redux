import { createSlice } from "@reduxjs/toolkit";
import { pizzas } from "../data/pizzas.json";

const initialState = {
  pizzas,
  panier: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export const {} = maSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
