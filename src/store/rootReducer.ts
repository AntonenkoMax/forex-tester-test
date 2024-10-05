import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import hackersNews from "./hacker-news";

export const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [hackersNews.name]: hackersNews.reducer,
});

export default rootReducer;
