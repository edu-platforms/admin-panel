import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";

const initialState = {
  name: 'Report',
  filterTab: false,
}

const ReportSlice = createSlice({
  name: ENTITIES.students,
  initialState,
  reducers: {
    openReportFilterTab: (state) => {
      state.filterTab = !state.filterTab
    }
  }
})

export const reportSelector = (state) => state.reports;
export const reportActions = ReportSlice.actions;
export const { openReportFilterTab } = ReportSlice.actions;

export default ReportSlice.reducer;
