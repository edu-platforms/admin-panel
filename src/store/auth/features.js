import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage } from "@/utils";
import { ENTITIES } from "../entities";
import { authLoadings } from "@/pages/Auth/constants";

const initialState = {
  admin: null,
  token: null,
  isAuth: null,
  loading: {
    sign: false,
    email: false,
    check: false,
    reset: false,
  },
  isEmailSend: false
};

const authSlice = createSlice({
  name: ENTITIES.auth,
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },

    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },

    setLoading: ({ loading }, { payload }) => {
      loading[payload] = !loading[authLoadings[payload]];
    },

    setIsEmailSend: (state, { payload }) => {
      state.isEmailSend = payload;
    },

    logout: (state) => {
      clearLocalStorage();
      state.isAuth = null;
      state.token = null;
    },
  }
});

export const authSelector = (state) => state.auth;
export const authActions = authSlice.actions;

export default authSlice.reducer;
