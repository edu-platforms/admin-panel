import { useEffect } from "react";
import { useBreadCrumbs } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { dashboardBreadcrumb } from "./constants";
import { getDashboard, usersSelector } from "@/store";
import { Title } from "@/components";
import { dashboardDictionary } from "./dictionary";
import { Statistics } from "./Statistics";

export const Dashboard = () => {
  const dispatch = useDispatch()
  const { data: { dashboard } } = useSelector(usersSelector)

  const getData = async () => dispatch(getDashboard())

  useEffect(() => {
    getData()
  }, [])

  useBreadCrumbs(dashboardBreadcrumb);

  return (
    <>
      <Title>{dashboardDictionary.title}</Title>
      <Statistics statistics={dashboard} />
    </>
  );
};
