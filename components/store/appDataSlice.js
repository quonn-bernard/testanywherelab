import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  services: [],
  updated: false,
};

const appDataSlice = createSlice({
  name: "appData",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state.categories = action.payload.categories;
      state.services = action.payload.services;
      state.updated = true;
    },
  },
});


export const { update } = appDataSlice.actions;
export default appDataSlice.reducer;
