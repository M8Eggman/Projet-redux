import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../data/pizzas.json";

const initialState = {
  allPizzas: pizzas.map((pizza) => {
    return { ...pizza, id: pizza.name, ingredientsSup: [], ingredientsSans: [] };
  }),
  panier: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    ajouterPanier: (state, action) => {
      state.panier.push({ ...action.payload, id: Date.now(), quantity: 1 });
    },
    modifierPizzaPanier: (state, action) => {
      const index = state.panier.findIndex((p) => p.id === action.payload.id);
      state.panier[index] = { ...state.panier[index], ...action.payload };
    },
    supprimerPanier: (state, action) => {
      state.panier = state.panier.filter((pizza) => pizza.id !== action.payload);
    },
    changerQuantite: (state, action) => {
      const pizza = state.panier.find((p) => p.id === action.payload.id);
      pizza.quantity += action.payload.nbr;
      if (pizza.quantity + action.payload.nbr <= 0) {
        state.panier = state.panier.filter((pizza) => pizza.id !== action.payload.id);
      }
    },
    resetPanier: (state) => {
      state.panier = [];
    },
  },
});

export const { ajouterPanier, supprimerPanier, changerQuantite, modifierPizzaPanier, resetPanier, ajoutIngredient } = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;
