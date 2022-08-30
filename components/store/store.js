import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import data from "./appDataSlice";

const combinedReducer = combineReducers({
  data: data,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore);
