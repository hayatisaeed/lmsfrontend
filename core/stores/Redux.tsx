"use client";
import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import sliceQuestion from "@/features/student/idClasses/content/tests/slice/questionTest";

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

export default function Redux({ children }: IReduxProps) {
  return <Provider store={store}>{children}</Provider>;
}
