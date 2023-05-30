import { AxiosError } from "axios";
import { makeErrMsg } from "./general";
import { notification } from "antd";

export const addNotification = (data) => {
  if (data instanceof AxiosError) {
    notification.error({
      message: makeErrMsg(data),
      placement: "topRight",
    });

    return;
  }

  notification.success({
    message: data,
    placement: "topRight",
  });
};
