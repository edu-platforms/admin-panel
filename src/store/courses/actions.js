import { createAsyncThunk } from "@reduxjs/toolkit";
import { coursesApi } from "@/api";
import { courseActions } from "./features";
import { addNotification } from "@/utils";
import { history, loadings } from "@/utils";
import { ROUTES } from "@/constants";

export const getCourses = createAsyncThunk(
  "get/courses",
  async (params, { dispatch }) => {
    try {
      dispatch(courseActions.setLoading(loadings.get));
      const res = await coursesApi.getCourses(params);

      if (res.code) {
        dispatch(courseActions.setCourses(res));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setLoading(loadings.get));
    }
  }
);

export const getSingleCourse = createAsyncThunk(
  "get/single-course",
  async (id, { dispatch }) => {
    try {
      dispatch(courseActions.setLoading(loadings.get));
      const res = await coursesApi.getSingleCourse(id);

      if (res.code) {
        dispatch(courseActions.setCourse(res.data));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setLoading(loadings.get));
    }
  }
);

export const createCourse = createAsyncThunk(
  "create/course",
  async (params, { dispatch }) => {
    try {
      const res = await coursesApi.createCourse(params);

      if (res.code) {
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

      if (res.code) {
        addNotification(res.message);
        history.back();
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setLoading(loadings.patch));
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "delete/course",
  async (id, { dispatch }) => {
    try {
      dispatch(courseActions.setLoading(loadings.delete));
      dispatch(courseActions.setDeletedCourseId(id));
      const res = await coursesApi.deleteCourse(id);

      if (res.code) {
        addNotification(res.message);
        dispatch(courseActions.removeCourse(res.data));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(courseActions.setDeletedCourseId(null));
      dispatch(courseActions.setLoading(loadings.delete));
    }
  }
);
