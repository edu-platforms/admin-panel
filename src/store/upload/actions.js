import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadApi } from "@/api";
import { uploadActions } from "./features";
import { addNotification } from "@/utils";

export const fileUpload = createAsyncThunk(
  "file/upload",
  async (params, { dispatch }) => {
    try {
      dispatch(uploadActions.setLoading(true));
      const res = await uploadApi.fileUplaod(params);

      if (res.code) {
        dispatch(uploadActions.setData(res.data));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(uploadActions.setLoading(false));
    }
  }
);
