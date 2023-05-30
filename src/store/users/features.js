import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { loadings } from "@/utils";

const initialState = {
  loading: {
    get: false,
    create: false,
    update: false,
    delete: false,
  },
  data: {
    tutors: [],
    tutorRequests: [],
  },
  total: 0,
  search: "",
  deletedCourseId: null,
};

const usersSlice = createSlice({
  name: ENTITIES.users,
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search = payload;
    },

    setLoading: ({ loading }, { payload }) => {
      loading[payload] = !loading[loadings[payload]];
    },

    setTutorRequests: (state, { payload }) => {
      state.data.tutorRequests = payload.data;
      state.total = payload.total;
    },
  },
});

export const usersSelector = (state) => state.users;
export const userActions = usersSlice.actions;

export default usersSlice.reducer;
