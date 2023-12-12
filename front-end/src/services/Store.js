import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduers/user";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
  }),
});
