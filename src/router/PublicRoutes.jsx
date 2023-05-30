import { Navigate, Outlet } from "react-router-dom";
import { ContentCenter } from "@/components";

export const PublicRoutes = ({ isAuth }) =>
  isAuth ? (
    <Navigate to="/" />
  ) : (
    <ContentCenter>
      <Outlet />
    </ContentCenter>
  );
