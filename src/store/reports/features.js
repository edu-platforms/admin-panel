import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { getReports } from "./actions";
import { addNotification } from "@/utils";

const initialState = {
  loading: false,
  reports: [],
  total: 0,
  search: "",
  isModalOpen: false,
  reporter: null
};

const reportsSlice = createSlice({
  name: ENTITIES.reports,
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search = payload;
    },

    setReporter: (state, { payload }) => {
      state.reporter = payload
    },

    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReports.pending, (state) => {
      state.loading = true;
      state.reports = [];
    });
    builder.addCase(getReports.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.reports = payload.data
      state.total = payload.totalCount
    });
    builder.addCase(getReports.rejected, (state, { payload }) => {
      state.loading = false;
      state.reports = [];
      addNotification(payload);
    });
  }
});

export const reportsSelector = (state) => state.reports;
export const reportActions = reportsSlice.actions;

export default reportsSlice.reducer;
