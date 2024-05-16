"use client";
import { counterSlice } from "@/slices/counter/CounterSlice";
import { themeSlice } from "@/slices/theme/ThemeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
