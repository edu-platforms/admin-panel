import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";

const initialState = {
  breadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: ENTITIES.breadcrumb,
  initialState,
  reducers: {
    addBreadcrumbs: (state, { payload }) => {
      state.breadcrumbs = payload;
    },

    clearBreadcrumbs: (state) => {
      state.breadcrumbs = [];
    },
  },
});

const { reducer, actions } = breadcrumbSlice;

export const breadcrumbSelector = (state) => state.breadcrumb;

export const {
  addBreadcrumb,
  addBreadcrumbs,
  clearBreadcrumbs,
  removeBreadcrumb,
} = actions;

export default reducer;
