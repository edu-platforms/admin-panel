import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@/api";
import { authActions } from "./features";
import { addNotification, setLocalStorage, removeLocalStorage } from "@/utils";
import { history } from "@/utils";
import { ROUTES } from "@/constants";

export const signIn = createAsyncThunk(
  "admin/sign-in",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.signIn(params);

      if (res.code && res.data.user_role === "admin") {
        const { token, data } = res;

        setLocalStorage("access-token", token);
        setLocalStorage("admin", data);
        dispatch(authActions.setAuth(true));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);

export const resetPassword = createAsyncThunk(
  "admin/reset-password",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.resetPassword(params);

      if (res.code) {
        addNotification(res.message);
        setLocalStorage("admin-email", params.email);
        history.push(ROUTES.reset);
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);

export const resetVerify = createAsyncThunk(
  "admin/reset-verify",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.resetVerify(params);

      if (res.message) {
        addNotification(res.message);
        removeLocalStorage("admin-email");
        history.push(ROUTES.signIn);
      }
    } catch (e) {
      console.log(e);
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);

export const changePassword = createAsyncThunk(
  "admin/change-password",
  async (params) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.changePassword(params);
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);
