import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { addNotification, loadings } from "@/utils";
import { getCourses, getSingleCourse } from "./actions";

const initialState = {
  loading: {
    get: false,
    post: false,
    put: false,
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

    setCourse: ({ data }, { payload }) => {
      data.course = payload;
    },

    setCourses: (state, { payload }) => {
      state.data.courses = payload.data;
      state.total = payload.total;
    },

    setDeletedCourseId: (state, { payload }) => {
      state.deletedCourseId = payload;
    },

    removeCourse: ({ data }, { payload }) => {
      data.courses = data.courses.filter(
        (course) => course.id !== payload.id
      );
    },
  },
  extraReducers: (builder) => {
    // Get Courses
    builder.addCase(getCourses.pending, (state) => {
      state.loading.get = true;
      state.data.courses = [];
    });
    builder.addCase(getCourses.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.courses = payload.data;
      state.total = payload.totalCount
    });
    builder.addCase(getCourses.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.data.courses = [];
      addNotification(payload);
    });

    // Get Details
    builder.addCase(getSingleCourse.pending, (state) => {
      state.loading.get = true;
      state.data.course = {};
    });
    builder.addCase(getSingleCourse.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.course = payload.data;
    });
    builder.addCase(getSingleCourse.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.data.course = {};
      addNotification(payload);
    });
  }
});

export const coursesSelector = (state) => state.courses;
export const courseActions = coursesSlice.actions;

export default coursesSlice.reducer;
