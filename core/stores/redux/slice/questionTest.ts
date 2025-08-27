//slice
import { IExamSession } from "@/services/tanstack/student/classes/idClasses/tests/types";
import { createSlice } from "@reduxjs/toolkit";

//types
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: Partial<IExamSession> = {};

const sliceQuestion = createSlice({
  name: "courses/tests",
  initialState,
  reducers: {
    addQuestion: (_, action: PayloadAction<Partial<IExamSession>>) => {
      return action.payload;
    },
  },
});

export const { addQuestion } = sliceQuestion.actions;

export default sliceQuestion.reducer;
