import { createAsyncThunk } from "@reduxjs/toolkit";
import { reportsApi } from "@/api";

export const getReports = createAsyncThunk(
  "get/reports",
  async (params, { rejectWithValue }) => {
    try {
      return await reportsApi.getReports(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const solveReport = createAsyncThunk(
  "solve/report",
  async ({ params, close }, { rejectWithValue }) => {
    try {
      const res = await reportsApi.solveReport(params);

      if (res.data) {
        close();
        return res.data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
