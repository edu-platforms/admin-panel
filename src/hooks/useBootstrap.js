import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, authSelector } from "@/store";
import { getLocalStorage } from "@/utils";

export default function useBootstrap() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(authSelector);
  const [isInitiated, setIsInitiated] = useState(true);

  const admin = getLocalStorage('admin')
  const accessToken = getLocalStorage('access-token')

  const setApp = () => {
    if (accessToken && admin) {
      dispatch(authActions.setAuth(true));
      dispatch(authActions.setToken(accessToken));
    } else {
      dispatch(authActions.logout())
    }
  };

  useEffect(() => {
    const getAppConfigs = () => {
      try {
        setApp();
        setIsInitiated(false);
      } catch (e) {
        console.error(e);
      }
    };

    getAppConfigs();
  }, []);

  return { isAuth, isInitiated };
}
