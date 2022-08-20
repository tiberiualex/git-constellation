import { combineReducers } from "@reduxjs/toolkit";
import starsReducer from "./slices/starsSlice";

const rootReducer = combineReducers({
  stars: starsReducer,
});

export default rootReducer;
