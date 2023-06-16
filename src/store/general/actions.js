import { createAsyncThunk } from "@reduxjs/toolkit";
import { generalApi } from "@/api";

export const getLessonDurationWeek = createAsyncThunk(
  "get/lesson-duration-week",
  async (_, { rejectWithValue }) => {
    try {
      return await generalApi.getLessonDurationWeek();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
