import { useBreadCrumbs } from "@/hooks";
import { dashboardBreadcrumb } from "./constants";
import { Title } from "@/components";
import { dashboardDictionary } from "./dictionary";
import { Statistics } from "./Statistics";

export const Dashboard = () => {
  useBreadCrumbs(dashboardBreadcrumb);

  return (
    <>
      <Title>{dashboardDictionary.title}</Title>
      <Statistics />
    </>
  );
};
