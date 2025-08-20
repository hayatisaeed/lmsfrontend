import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  name: string;
}

const initialState: QuestionState = {
  name: "",
};

const sliceQuestion = createSlice({
  name: "courses/tests",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { addQuestion } = sliceQuestion.actions;

export default sliceQuestion.reducer;
