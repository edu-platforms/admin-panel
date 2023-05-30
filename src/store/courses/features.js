import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { loadings } from "@/utils";

const initialState = {
  loading: {
    get: false,
    post: false,
    patch: false,
    delete: false,
  },
  data: {
    courses: [],
    course: {},
  },
  total: 0,
  search: "",
  deletedCourseId: null,
};

const coursesSlice = createSlice({
  name: ENTITIES.courses,
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search = payload;
    },

    setLoading: ({ loading }, { payload }) => {
      loading[payload] = !loading[loadings[payload]];
    },

    setCourse: (state, { payload }) => {
      state.data.course = payload;
    },

    setCourses: (state, { payload }) => {
      state.data.courses = payload.data;
      state.total = payload.total;
    },

    setDeletedCourseId: (state, { payload }) => {
      state.deletedCourseId = payload;
    },

    removeCourse: (state, { payload }) => {
      state.data.courses = state.data.courses.filter(
        (course) => course.course_id !== payload.course_id
      );
    },
  },
});

export const coursesSelector = (state) => state.courses;
export const courseActions = coursesSlice.actions;

export default coursesSlice.reducer;
