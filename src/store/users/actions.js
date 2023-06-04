import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "@/api";
import { userActions } from "./features";
import { addNotification } from "@/utils";
import { history, loadings } from "@/utils";
import { ROUTES } from "@/constants";

export const getDashboard = createAsyncThunk(
  "get/dashboard",
  async () => {
    try {
      const res = await usersApi.getDashboard();

      if (res.data) return res.data
    } catch (e) {
      addNotification(e);
    }
  }
);

export const getTutors = createAsyncThunk(
  "get/tutors",
  async (params) => {
    try {
      const res = await usersApi.getTutors(params);

      if (res.data) return res
    } catch (e) {
      addNotification(e);
    }
  }
);

export const getTutorRequests = createAsyncThunk(
  "get/tutor-requests",
  async (params) => {
    try {
      const res = await usersApi.getTutorRequests(params);

      if (res.data) return res
    } catch (e) {
      addNotification(e);
    }
  }
);

export const getOne = createAsyncThunk(
  "get/one",
  async (params) => {
    try {
      const res = await usersApi.getOne(params);

      if (res.data) return res.data
    } catch (e) {
      addNotification(e);
    }
  }
);

export const acceptReject = createAsyncThunk(
  "user/accept-reject",
  async (params) => {
    dispatch(userActions.setLoading(loadings.put));
    try {
      const res = await usersApi.acceptReject(params);

      if (res.data) {
        addNotification("Success")
        history.back()
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(userActions.setLoading(loadings.put));
    }
  }
);
