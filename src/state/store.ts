import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bag/bagSlice";
import searchSlice from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    bag: bagSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
