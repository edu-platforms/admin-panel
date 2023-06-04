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

      if (res.data && res.data.role === "admin") {
        const { data } = res;

        setLocalStorage("access-token", data.token);
        setLocalStorage("admin", { firstName: data.firstname, lastName: data.lastname, email: data.email, photo: data.photo });
        dispatch(authActions.setAuth(true));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);

export const sendEmail = createAsyncThunk(
  "admin/send-email",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.sendEmail(params);

      console.log(res);
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

export const checkCode = createAsyncThunk(
  "admin/check-code",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      const res = await authApi.checkCode(params);

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

export const changePsw = createAsyncThunk(
  "admin/change-password",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(true));
      // const res = await authApi.changePsw(params);
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(false));
    }
  }
);
