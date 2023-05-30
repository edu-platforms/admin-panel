import { createSlice } from "@reduxjs/toolkit";
import { ENTITIES } from "../entities";

const initialState = {
  videoModal: false,
  selectedVideoId: "",
  filterTab: false,
  values: {
    studentName: "Asad",
    tutorName: "Tutor",
    date: {
      start: '',
      end: ''
    },
  },
};

export const videosSlice = createSlice({
  name: ENTITIES.videos,
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.values[action.payload.name] = action.payload.value;
      if (action.payload.name === 'date') {
        const date = action.payload.value
        state.values.date.start = +new Date(date[0].$d / 1000)
        state.values.date.end = +new Date(date[1].$d / 1000)
      }
    },

    setOpenVideoModal: (state) => {
      state.videoModal = true;
    },

    setCloseVideoModal: (state) => {
      state.videoModal = false;
    },

    setSelectedVideoId: (state, { payload }) => {
      state.selectedVideoId = payload.id;
    },

    openVideosFilterTab: (state) => {
      state.filterTab = !state.filterTab;
    },

    clear: (state) => {
      state.values.studentName = "";
      state.values.tutorName = "";
      state.values.date = '';
      state.values.date = '';
    },
  },
});

export const videosSelector = (state) => state.videos;
export const videosActions = videosSlice.actions;
export const {
  clear,
  updateFilter,
  setOpenVideoModal,
  setSelectedVideoId,
  setCloseVideoModal,
  openVideosFilterTab,
} = videosSlice.actions;

export default videosSlice.reducer;
