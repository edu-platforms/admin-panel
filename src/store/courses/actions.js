import { createAsyncThunk } from "@reduxjs/toolkit";
import { coursesApi } from "@/api";
import { courseActions } from "./features";
import { history, loadings, addNotification } from "@/utils";
import { ROUTES } from "@/constants";

export const getCourses = createAsyncThunk(
  "get/courses",
  async (params) => {
    try {
      const res = await coursesApi.getCourses(params);

      if (res.data) return res
    } catch (e) {
      addNotification(e);
    }
  }
);

export const getSingleCourse = createAsyncThunk(
  "get/single-course",
  async (params) => {
    try {
      const res = await coursesApi.getSingleCourse(params);

      if (res.data) return res.data
    } catch (e) {
      addNotification(e);
    }
  }
);

export const createCourse = createAsyncThunk(
  "create/course",
  async (params, { dispatch }) => {
    try {
      const res = await coursesApi.createCourse(params);

      if (res.data) {
        addNotification(res.message);
        history.push(ROUTES.courses);
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setLoading(loadings.post));
    }
  }
);

export const updateCourse = createAsyncThunk(
  "update/course",
  async (params, { dispatch }) => {
    try {
      const res = await coursesApi.updateCourse(params);

      if (res.data) {
        addNotification(res.message);
        history.back();
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setLoading(loadings.put));
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "delete/course",
  async (params, { dispatch }) => {
    try {
      dispatch(courseActions.setLoading(loadings.delete));
      dispatch(courseActions.setDeletedCourseId(params.id));

      const res = await coursesApi.deleteCourse(params);

      if (res.data) {
        addNotification(res.message);
        dispatch(courseActions.removeCourse(params));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setDeletedCourseId(null));
      dispatch(courseActions.setLoading(loadings.delete));
    }
  }
);
