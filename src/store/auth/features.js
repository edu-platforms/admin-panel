import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage } from "@/utils";
import { ENTITIES } from "../entities";

const initialState = {
  admin: null,
  token: null,
  isAuth: null,
  loading: false,
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
      state.isAuth = null;
      state.token = null;
    },
  }
});

export const authSelector = (state) => state.auth;
export const authActions = authSlice.actions;

export default authSlice.reducer;
