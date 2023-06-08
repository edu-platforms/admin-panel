import { createAsyncThunk } from "@reduxjs/toolkit";
import { reportsApi } from "@/api";

export const getReports = createAsyncThunk(
  "get/reports",
  async (params, { rejectWithValue }) => {
    try {
      return await reportsApi.getReports(params);
    } catch (e) {
      return rejectWithValue(e)
    }
  }
);