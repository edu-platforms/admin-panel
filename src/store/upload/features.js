import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";

const initialState = {
  loading: false,
  data: {},
};

const uploadSlice = createSlice({
  name: ENTITIES.upload,
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const uploadSelector = (state) => state.upload;
export const uploadActions = uploadSlice.actions;

export default uploadSlice.reducer;
