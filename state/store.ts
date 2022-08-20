import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

// Test utility
export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer: rootReducer, preloadedState });
}

export default store;

// Correct types for dispatch and state, to be used in case
// type inference fails
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type StateDispatch = {
  state: RootState;
  dispatch: AppDispatch;
};
