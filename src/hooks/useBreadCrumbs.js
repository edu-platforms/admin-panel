import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBreadcrumbs, clearBreadcrumbs } from "@/store";

export default function useBreadCrumbs(breadcrumbs) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBreadcrumbs(breadcrumbs));

    return () => clearBreadcrumbs();
  }, [breadcrumbs]);
}
