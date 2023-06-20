import { createAsyncThunk } from "@reduxjs/toolkit";
import { settingsApi } from "@/api";

export const getLessonDurationWeek = createAsyncThunk(
  "get/lesson-duration-week",
  async (_, { rejectWithValue }) => {
    try {
      return await settingsApi.getLessonDurationWeek();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createLessonDurationWeek = createAsyncThunk(
  "create/lesson-duration-week",
  async (params, { rejectWithValue }) => {
    try {
      return await settingsApi.createLessonDurationWeek(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateLessonDurationWeek = createAsyncThunk(
  "update/lesson-duration-week",
  async (params, { rejectWithValue }) => {
    console.log(params);
    try {
      return await settingsApi.updateLessonDurationWeek(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getConfigurations = createAsyncThunk(
  "get/configurations",
  async (_, { rejectWithValue }) => {
    try {
      return await settingsApi.getConfigurations();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateConfiguration = createAsyncThunk(
  "update/configuration",
  async (params, { rejectWithValue }) => {
    try {
      return await settingsApi.updateConfiguration(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getPlans = createAsyncThunk(
  "get/plans",
  async (_, { rejectWithValue }) => {
    try {
      return await settingsApi.getPlans();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createPlan = createAsyncThunk(
  "create/plan",
  async (params, { rejectWithValue }) => {
    try {
      return await settingsApi.createPlan(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updatePlan = createAsyncThunk(
  "update/plan",
  async (params, { rejectWithValue }) => {
    try {
      return await settingsApi.updatePlan(params);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
