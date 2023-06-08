import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@/api";
import { authActions } from "./features";
import { addNotification, setLocalStorage, makeAdminInfo } from "@/utils";
import { history } from "@/utils";
import { ROUTES } from "@/constants";
import { authLoadings } from "@/pages/Auth/constants";

export const signIn = createAsyncThunk(
  "admin/sign-in",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(authLoadings.sign));
      const res = await authApi.signIn(params);

      if (res.data && res.data.role === "admin") {
        const { data } = res;

        setLocalStorage("admin", makeAdminInfo(data));
        setLocalStorage("access-token", data.token);

        dispatch(authActions.setAuth(true));
        dispatch(authActions.setToken(data.token));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(authLoadings.sign));
    }
  }
);

export const sendEmail = createAsyncThunk(
  "admin/send-email",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(authLoadings.email));
      const res = await authApi.sendEmail(params);

      if (res.data) {
        history.push(ROUTES.check);
        dispatch(authActions.setIsEmailSend(true))
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(authLoadings.email));
    }
  }
);

export const checkCode = createAsyncThunk(
  "admin/check-code",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(authLoadings.check));
      const res = await authApi.checkCode(params);

      if (res.data) {
        addNotification(res.message);
        history.push(ROUTES.reset);
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(authLoadings.check));
    }
  }
);

export const changePsw = createAsyncThunk(
  "admin/change-password",
  async (params, { dispatch }) => {
    try {
      dispatch(authActions.setLoading(authLoadings.reset));
      const res = await authApi.changePsw(params);

      if (res.data) {
        console.log(res.data);
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(authActions.setLoading(authLoadings.reset));
    }
  }
);
