import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "@/utils";
import { authActions, authSelector } from "@/store";

export default function useBootstrap() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(authSelector);
  const [isInitiated, setIsInitiated] = useState(true);

  const accessToken = getLocalStorage("access-token");

  const setApp = () => {
    if (accessToken) {
      dispatch(authActions.setAuth(true));
      dispatch(authActions.setToken(accessToken));
    }
  };

 

  useEffect(() => {
    const getAppConfigs = async () => {
      try {
        await setApp();
  
        setIsInitiated(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAppConfigs();
  }, []);

  return { isAuth, isInitiated };
}
