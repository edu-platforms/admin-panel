import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.file,
};

class UploadApi extends Instance {
  constructor(config) {
    super(config);
  }

  fileUpload = (formData) => this.post("", formData);

  filesUpload = (formData, onProgress) =>
    this.post(endpoints.file, formData, {
      onUploadProgress: (e) => {
        const percent = Math.floor((e.loaded / e.total) * 100);

        onProgress({ percent });
      },
    });
}

export const uploadApi = new UploadApi(config);
