import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { getReports, solveReport } from "./actions";
import { addNotification } from "@/utils";

const initialState = {
  loading: {
    get: false,
    put: false,
  },
  reports: [],
  total: 0,
  search: "",
  isModalOpen: false,
  reporter: null,
};

const reportsSlice = createSlice({
  name: ENTITIES.reports,
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search = payload;
    },

    setReporter: (state, { payload }) => {
      state.reporter = payload;
    },

    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: (builder) => {
    // Get reports
    builder.addCase(getReports.pending, (state) => {
      state.loading.get = true;
      state.reports = [];
    });
    builder.addCase(getReports.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.reports = payload.data;
      state.total = payload.totalCount;
    });
    builder.addCase(getReports.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.reports = [];
      addNotification(payload);
    });

    // Solve report
    builder.addCase(solveReport.pending, (state) => {
      state.loading.put = true;
    });
    builder.addCase(solveReport.fulfilled, (state, { payload }) => {
      state.loading.put = false;
      const report = state.reports.find((report) => report.id === payload.id);

      report.isSolve = payload.isSolve;
    });
    builder.addCase(solveReport.rejected, (state, { payload }) => {
      console.log("ok");
      state.loading.put = false;
      addNotification(payload);
    });
  },
});

export const reportsSelector = (state) => state.reports;
export const reportActions = reportsSlice.actions;

export default reportsSlice.reducer;
