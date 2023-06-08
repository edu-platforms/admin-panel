import { AxiosError } from "axios";
import { makeErrMsg } from "./general";
import { toast } from "react-hot-toast";

export const addNotification = (data) => {

  if (data instanceof AxiosError) {
    toast.error(makeErrMsg(data), {
      position: 'top-right'
    });

    return;
  }

  toast.success(data, {
    position: 'top-right'
  });
};
