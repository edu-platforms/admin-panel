import { uploadApi } from "@/api";
import { addNotification } from "./addNotification";

export const upload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await uploadApi.fileUpload(formData);

    if (res) return res.location
  } catch (e) {
    addNotification(e);
    return Promise.reject(e);
  }
};
