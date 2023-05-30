import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";

const initialState = {
  name: 'Student Hello',
  filterTab: false,
}

const StudentsSlice = createSlice({
  name: ENTITIES.students,
  initialState,
  reducers: {
    openStudentsFilterTab: (state) => {
      state.filterTab = !state.filterTab
    }
  }
})

export const studentsSelector = (state) => state.students;
export const studentsActions = StudentsSlice.actions;
export const { openStudentsFilterTab } = StudentsSlice.actions;

export default StudentsSlice.reducer;
