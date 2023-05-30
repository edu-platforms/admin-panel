import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage } from "@/utils";
import { ENTITIES } from "../entities";

const initialState = {
  loading: false,
  token: null,
  isAuth: null,
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
      state.loading = false;
    },
  },
});

export const authSelector = (state) => state.auth;
export const authActions = authSlice.actions;

export default authSlice.reducer;
