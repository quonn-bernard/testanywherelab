import { configureStore } from "@reduxjs/toolkit";
import appDataSlice from "./appDataSlice";

const store = configureStore({
    reducer: { appData: appDataSlice }
})

export default store;