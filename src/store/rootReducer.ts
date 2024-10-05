import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";

export const rootReducer = combineReducers({
  [user.name]: user.reducer,
});

export default rootReducer;
