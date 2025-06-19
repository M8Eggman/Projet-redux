import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../data/pizzas.json";

const initialState = {
  allPizzas: pizzas,
  panier: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    ajouterPanier: (state, action) => {
      state.panier.push({ ...action.payload, id: Date.now(), quantity: 1 });
    },
  },
});

export const { ajouterPanier } = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
