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
    supprimerPanier: (state, action) => {
      state.panier = state.panier.filter((pizza) => pizza.id !== action.payload);
    },
  },
});

export const { ajouterPanier, supprimerPanier } = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
