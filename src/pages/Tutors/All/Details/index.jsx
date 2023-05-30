import { useBreadCrumbs } from "@/hooks";
import { tutorsDetailsBreadcrumb } from "../constants";
import { Tabs } from "antd";
import { allTutorDictionary } from "../dictionary";

import "./style.scss";
import { TutorRating } from "./Rating";
import { TutorDetail } from "./Detail";

export const TutorsAllDetails = () => {
  useBreadCrumbs(tutorsDetailsBreadcrumb);

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

  return (
    <Tabs size="large" type="card" defaultActiveKey="1" items={contents} />
  );
};
