import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, getLocalStorage } from "@/utils";
import { ENTITIES } from "../entities";

const admin = getLocalStorage('admin') || null;

const initialState = {
  loading: false,
  token: null,
  isAuth: null,
  admin
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

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },

    logout: (state) => {
      clearLocalStorage();
      state.isAuth = false;
      state.token = null;
    },
  }
});

export const authSelector = (state) => state.auth;
export const authActions = authSlice.actions;

export default authSlice.reducer;
