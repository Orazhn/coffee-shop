import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bag/bagSlice";

export const store = configureStore({
    reducer: {
        bag: bagSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;