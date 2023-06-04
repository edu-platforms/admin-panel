import { createSlice } from "@reduxjs/toolkit";
import { getDashboard, getOne, getTutorRequests, getTutors } from "./actions";
import { ENTITIES } from "../entities";
import { loadings } from "@/utils";

const initialState = {
  loading: {
    get: false,
    post: false,
    put: false,
    delete: false,
  },
  data: {
    tutors: [],
    tutorRequests: [],
    details: {},
    dashboard: {},
  },
  total: 0,
  search: "",
  userFullName: "",
  isModalOpen: false,
  selectedUserId: null,
};

const usersSlice = createSlice({
  name: ENTITIES.users,
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search = payload;
    },

    setFullName: (state, { payload }) => {
      state.userFullName = payload;
    },

    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },

    setSelectedUserId: (state, { payload }) => {
      state.selectedUserId = payload;
    },

    setLoading: ({ loading }, { payload }) => {
      loading[payload] = !loading[loadings[payload]];
    },

    setTutorRequests: (state, { payload }) => {
      state.data.tutorRequests = payload.data;
      state.total = payload.total;
    },
  },
  extraReducers: (builder) => {
    // Get Dashboard
    builder.addCase(getDashboard.pending, (state) => {
      state.loading.get = true;
      state.data.dashboard = {};
    });
    builder.addCase(getDashboard.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.dashboard = payload;
    });
    builder.addCase(getDashboard.rejected, (state) => {
      state.loading.get = false;
      state.data.dashboard = {};
    });

    // Get Tutors
    builder.addCase(getTutors.pending, (state) => {
      state.loading.get = true;
      state.data.tutors = [];
    });
    builder.addCase(getTutors.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.tutors = payload.data;
      state.total = payload.totalCount
    });
    builder.addCase(getTutors.rejected, (state) => {
      state.loading.get = false;
      state.data.tutors = [];
    });

     // Get Tutors Requests
     builder.addCase(getTutorRequests.pending, (state) => {
      state.loading.get = true;
      state.data.tutorRequests = [];
    });
    builder.addCase(getTutorRequests.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.tutorRequests = payload.data;
      state.total = payload.totalCount
    });
    builder.addCase(getTutorRequests.rejected, (state) => {
      state.loading.get = false;
      state.data.tutorRequests = [];
    });

     // Get One
     builder.addCase(getOne.pending, (state) => {
      state.loading.get = true;
      state.data.details = {};
    });
    builder.addCase(getOne.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.details = payload;
    });
    builder.addCase(getOne.rejected, (state) => {
      state.loading.get = false;
      state.data.details = {};
    });
  }
});

export const usersSelector = (state) => state.users;
export const userActions = usersSlice.actions;

export default usersSlice.reducer;
