import { stage } from "@/config";

export const VALID_MIME_TYPES = [".pdf", ".pptx"];
export const cdnUrl = new URL(stage.cdnHost);
export const loadings = {
  get: "get",
  post: "post",
  path: "path",
  delete: "delete",
};

export const makeErrMsg = (error) => {
  if (!error.response?.data) {
    return error.message;
  }

  if (error.response?.data) {
    return error.response.data.message;
  }

  const { err: responseError } = error.response.data;

  if (responseError.errMsg instanceof Array) {
    return responseError.errMsg[0];
  }

  return responseError.errMsg;
};

export const makeFileUrl = (partUrl) => {
  if (!partUrl) {
    return;
  }
  const pathname = [cdnUrl.pathname, partUrl].join("/");

  return new URL(pathname, stage.cdnHost).href;
};
