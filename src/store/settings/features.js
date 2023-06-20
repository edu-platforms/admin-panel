import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";
import { 
  getPlans, 
  updatePlan,
  createPlan, 
  getConfigurations, 
  updateConfiguration, 
  getLessonDurationWeek,
  createLessonDurationWeek,
  updateLessonDurationWeek, 
} from "./actions";
import { addNotification } from "@/utils";

const initialState = {
  loading: {
    get: false,
    post: false,
    put: false,
  },
  data: {
    plans: [],
    configurations: [],
    lessonDurationWeeks: [],
  },
  isCreate: false,
  isSuccess: false,
  isModalOpen: false,
  selectedItem: null,
};

const settingsSlice = createSlice({
  name: ENTITIES.settings,
  initialState,
  reducers: {
    setIsCreate: (state, {payload}) => {
      state.isCreate = payload
    },

    setIsModalOpen: (state, {payload}) => {
      state.isModalOpen = payload
    },

    setIsSuccess: (state, {payload}) => {
      state.isSuccess = payload
    },

    setSelectedItem: (state, {payload}) => {
      state.selectedItem = payload
    },
  },
  extraReducers: (builder) => {
    // Get Plans
    builder.addCase(getPlans.pending, (state) => {
      state.loading.get = true;
      state.data.plans = []
    });
    builder.addCase(getPlans.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.plans = payload.data
    });
    builder.addCase(getPlans.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.data.plans = []
      addNotification(payload);
    });

    // Create Plan
    builder.addCase(createPlan.pending, (state) => {
      state.loading.post = true;
      state.isSuccess = false;
    });
    builder.addCase(createPlan.fulfilled, (state, { payload }) => {
      state.loading.post = false;
      state.isSuccess = true;
      state.data.plans = [...state.data.plans, payload.data]
      addNotification(payload.message);
    });
    builder.addCase(createPlan.rejected, (state, { payload }) => {
      state.loading.post = false;
      state.isSuccess = false;
      addNotification(payload);
    });

    // Update Plan
    builder.addCase(updatePlan.pending, (state) => {
      state.loading.put = true;
      state.isSuccess = false;
    });
    builder.addCase(updatePlan.fulfilled, (state, { payload }) => {
      state.loading.put = false;
      const {message, data} = payload
      const updatedPlan = state.data.plans.find(plan => plan.id === data.id)
      updatedPlan.name = data.name
      updatedPlan.discountPercent = data.discountPercent
      state.isSuccess = true;
      addNotification(message);
    });
    builder.addCase(updatePlan.rejected, (state, { payload }) => {
      state.loading.put = false;
      state.isSuccess = false;
      addNotification(payload);
    });

    // Get Configurations
    builder.addCase(getConfigurations.pending, (state) => {
      state.loading.get = true;
      state.data.configurations = [];
    });
    builder.addCase(getConfigurations.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.configurations = payload.data;
    });
    builder.addCase(getConfigurations.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.data.configurations = [];
      addNotification(payload);
    });

     // Update Configuration
     builder.addCase(updateConfiguration.pending, (state) => {
      state.loading.put = true;
      state.isSuccess = false;
    });
    builder.addCase(updateConfiguration.fulfilled, (state, { payload }) => {
      state.loading.put = false;
      state.data.configurations = [payload.data];
      state.isSuccess = true;
      addNotification(payload.message);
    });
    builder.addCase(updateConfiguration.rejected, (state, { payload }) => {
      state.loading.put = false;
      state.isSuccess = true;
      addNotification(payload);
    });

    // Get Lesson Duration Weeks
    builder.addCase(getLessonDurationWeek.pending, (state) => {
      state.loading.get = true;
      state.data.lessonDurationWeeks = [];
    });
    builder.addCase(getLessonDurationWeek.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.data.lessonDurationWeeks = payload.data;
    });
    builder.addCase(getLessonDurationWeek.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.data.lessonDurationWeeks = [];
      addNotification(payload);
    });

    // Create Lesson Duration
    builder.addCase(createLessonDurationWeek.pending, (state) => {
      state.loading.post = true;
      state.isSuccess = false;
    });
    builder.addCase(createLessonDurationWeek.fulfilled, (state, { payload }) => {
      state.loading.post = false;
      state.isSuccess = true;
      state.data.lessonDurationWeeks = [...state.data.lessonDurationWeeks, payload.data]
      addNotification(payload.message);
    });
    builder.addCase(createLessonDurationWeek.rejected, (state, { payload }) => {
      state.loading.post = false;
      state.isSuccess = false;
      addNotification(payload);
    });

    // Update Lesson Duration
    builder.addCase(updateLessonDurationWeek.pending, (state) => {
      state.loading.put = true;
      state.isSuccess = false;
    });
    builder.addCase(updateLessonDurationWeek.fulfilled, (state, { payload }) => {
      state.loading.put = false;
      const {message, data} = payload
      const updatedState = state.data.lessonDurationWeeks.map(lesson => lesson.id === data.id ? payload.data : lesson)
      state.data.lessonDurationWeeks = updatedState
      state.isSuccess = true;
      addNotification(message);
    });
    builder.addCase(updateLessonDurationWeek.rejected, (state, { payload }) => {
      state.loading.put = false;
      state.isSuccess = false;
      addNotification(payload);
    });

  },
});

export const settingsSelector = (state) => state.settings;
export const settingActions = settingsSlice.actions;

export default settingsSlice.reducer;
