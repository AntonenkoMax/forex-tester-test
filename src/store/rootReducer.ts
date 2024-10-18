import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import hackersNews from "./hacker-news";
import ftCharts from "./ft-charts";

export const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [hackersNews.name]: hackersNews.reducer,
  [ftCharts.name]: ftCharts.reducer,
});

export default rootReducer;
