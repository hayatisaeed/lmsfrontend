"use client";
import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import sliceQuestion from "@/core/stores/redux/slice/questionTest";

interface IReduxProps {
  children: ReactNode;
}

const store = configureStore({
  reducer: {
    sliceQuestion: sliceQuestion,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function ReduxProvider({ children }: IReduxProps) {
  return <Provider store={store}>{children}</Provider>;
}
