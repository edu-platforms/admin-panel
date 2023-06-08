import { useBreadCrumbs } from "@/hooks";
import { tutorsDetailsBreadcrumb } from "../constants";
import { Tabs } from "antd";
import { allTutorDictionary } from "../dictionary";

import "./details.module.scss";
import { TutorRating } from "./Rating";
import { TutorDetail } from "./Detail";

export const TutorsAllDetails = () => {

  const contents = [
    {
      key: "1",
      label: allTutorDictionary.tutorRating,
      children: <TutorRating />,
    },
    {
      key: "2",
      label: allTutorDictionary.tutorDetails,
      children: <TutorDetail />,
    },
  ];
  
  useBreadCrumbs(tutorsDetailsBreadcrumb);

  return (
    <Tabs size="large" type="card" defaultActiveKey="1" items={contents} />
  );
};
