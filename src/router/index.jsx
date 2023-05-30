import { useBootstrap } from "@/hooks";
import { Loader } from "@/components";
import { Routes } from "./routes";

export const Router = () => {
  const { isAuth, isInitiated } = useBootstrap();

  if (isInitiated) {
    return <Loader />;
  }

  return <Routes isAuth={isAuth} />;
};
