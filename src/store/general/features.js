import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { getLessonDurationWeek } from "./actions";
import { addNotification } from "@/utils";

const initialState = {
  loading: false,
  data: {
    lessonDurationWeeks: [],
  },
};

const generalSlice = createSlice({
  name: ENTITIES.general,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Lesson Duration Weeks
    builder.addCase(getLessonDurationWeek.pending, (state) => {
      state.loading = true;
      state.data.lessonDurationWeeks = [];
    });
    builder.addCase(getLessonDurationWeek.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data.lessonDurationWeeks = payload.data;
    });
    builder.addCase(getLessonDurationWeek.rejected, (state, { payload }) => {
      state.loading = false;
      state.data.lessonDurationWeeks = [];
      addNotification(payload);
    });
  },
});

export const generalSelector = (state) => state.general;
export const generalActions = generalSlice.actions;

export default generalSlice.reducer;
