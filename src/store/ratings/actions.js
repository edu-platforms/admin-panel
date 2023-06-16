import { createAsyncThunk } from "@reduxjs/toolkit";
import { ratingsApi } from "@/api";

export const getRatings = createAsyncThunk(
  "get/ratings",
  async (params, { rejectWithValue }) => {
    try {
      return await ratingsApi.getRatings(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
