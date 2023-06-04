import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/features";
import usersReducer from "./users/features";
import reportReducer from "./reports/features";
import uploadReducer from "./upload/features";
import videosReducer from "./videos/features";
import coursesReducer from "./courses/features";
import studentsReducer from "./students/features";
import breadcrumbReducer from "./breadcrumb/features";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  upload: uploadReducer,
  videos: videosReducer,
  reports: reportReducer,
  courses: coursesReducer,
  students: studentsReducer,
  breadcrumb: breadcrumbReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Auth
export * from "./auth/actions";
export * from "./auth/features";

// Users
export * from "./users/actions";
export * from "./users/features";

// Upload
export * from "./upload/actions";
export * from "./upload/features";

// Breadcrumb
export * from "./breadcrumb/features";

// Videos
export * from "./videos/features";

// Course
export * from "./courses/actions";
export * from "./courses/features";

// Students
export * from "./students/features";

// Reports
export * from "./reports/features";
