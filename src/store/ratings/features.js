import { createSlice } from "@reduxjs/toolkit";
import { getRatings } from "./actions";
import { ENTITIES } from "../entities";
import { addNotification } from "@/utils";

const initialState = {
  loading: false,
  ratings: [],
  total: 0,
};

const ratingsSlice = createSlice({
  name: ENTITIES.ratings,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRatings.pending, (state) => {
      state.loading = true;
      state.ratings = [];
    });
    builder.addCase(getRatings.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.ratings = payload.data;
      state.total = payload.totalCount;
    });
    builder.addCase(getRatings.rejected, (state, { payload }) => {
      state.loading = false;
      state.ratings = [];
      addNotification(payload);
    });
  },
});

export const ratingsSelector = (state) => state.ratings;
export const ratingActions = ratingsSlice.actions;

export default ratingsSlice.reducer;
