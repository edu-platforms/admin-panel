import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api";
import { userActions } from "./features";
import { addNotification } from "@/utils";
import { history, loadings } from "@/utils";
import { ROUTES } from "@/constants";

export const getTutorRequests = createAsyncThunk(
  "get/tutor-requests",
  async (params, { dispatch }) => {
    try {
      dispatch(userActions.setLoading(loadings.get));
      const res = await usersApi.getTutorRequests(params);

      console.log(res);
      if (res.code) {
        dispatch(userActions.setTutorRequests(res));
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(userActions.setLoading(loadings.get));
    }
  }
);

// export const getSingleCourse = createAsyncThunk(
//   "get/single-course",
//   async (id, { dispatch }) => {
//     try {
//       dispatch(userActions.setLoading(loadings.get));
//       const res = await usersApi.getSingleCourse(id);

//       if (res.code) {
//         dispatch(userActions.setCourse(res.data));
//       }
//     } catch (e) {
//       addNotification(e);
//     } finally {
//       dispatch(userActions.setLoading(loadings.get));
//     }
//   }
// );

// export const createCourse = createAsyncThunk(
//   "create/course",
//   async (params, { dispatch }) => {
//     try {
//       const res = await usersApi.createCourse(params);

//       if (res.code) {
//         addNotification(res.message);
//         history.push(ROUTES.coursesAll);
//       }
//     } catch (e) {
//       addNotification(e);
//     } finally {
//       dispatch(userActions.setLoading(loadings.create));
//     }
//   }
// );

// export const updateCourse = createAsyncThunk(
//   "update/course",
//   async (params, { dispatch }) => {
//     try {
//       const res = await usersApi.updateCourse(params);

//       if (res.code) {
//         addNotification(res.message);
//         history.back();
//       }
//     } catch (e) {
//       addNotification(e);
//     } finally {
//       dispatch(userActions.setLoading(loadings.update));
//     }
//   }
// );

// export const deleteCourse = createAsyncThunk(
//   "delete/course",
//   async (id, { dispatch }) => {
//     try {
//       dispatch(userActions.setLoading(loadings.delete));
//       dispatch(userActions.setDeletedCourseId(id));
//       const res = await usersApi.deleteCourse(id);

//       if (res.code) {
//         addNotification(res.message);
//         dispatch(userActions.removeCourse(res.data));
//       }
//     } catch (e) {
//       addNotification(e);
//     } finally {
//       dispatch(userActions.setDeletedCourseId(null));
//       dispatch(userActions.setLoading(loadings.delete));
//     }
//   }
// );
