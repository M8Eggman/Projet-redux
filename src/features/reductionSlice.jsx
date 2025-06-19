import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  reduction: 0, // Pourcentage de réduction
};

const reductionSlice = createSlice({
  name: "reduction",
  initialState,
  reducers: {
    appliquerCode: (state, action) => {
      const code = action.payload.toLowerCase();

      switch (code) {
        case "pizza10":
          state.code = "PIZZA10";
          state.reduction = 10;
          break;
        case "pizza20":
          state.code = "PIZZA20";
          state.reduction = 20;
          break;
        default:
          state.code = "";
          state.reduction = 0;
          break;
      }
    },
    resetReduction: (state) => {
      state.code = "";
      state.reduction = 0;
    },
  },
});

export const { appliquerCode, resetReduction } = reductionSlice.actions;
export const reductionReducer = reductionSlice.reducer; 
