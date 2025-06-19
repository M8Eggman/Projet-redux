import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  reduction: 0, // en pourcentage
};

const reductionSlice = createSlice({
  name: "reduction",
  initialState,
  reducers: {
    appliquerCode: (state, action) => {
      const codeSaisi = action.payload.toLowerCase();
      if (codeSaisi === "pizza10") {
        state.code = "PIZZA10";
        state.reduction = 10;
      } else if (codeSaisi === "pizza20") {
        state.code = "PIZZA20";
        state.reduction = 20;
      } else {
        state.code = "";
        state.reduction = 0;
      }
    },
    resetReduction: (state) => {
      state.code = "";
      state.reduction = 0;
    },
  },
});

export const { appliquerCode, resetReduction } = reductionSlice.actions;
export default reductionSlice.reducer;
