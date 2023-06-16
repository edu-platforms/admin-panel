import { useBreadCrumbs } from "@/hooks";
import { tutorsDetailsBreadcrumb } from "../constants";
import { Tabs } from "antd";
import { allTutorDictionary } from "../dictionary";
import { TutorRating } from "./Rating";
import { TutorDetail } from "./Detail";
import { tutorDetailsKey } from "./constants";

export const TutorsAllDetails = () => {
  const tutorTabs = [
    {
      key: tutorDetailsKey.rating,
      label: allTutorDictionary.tutorRating,
      children: <TutorRating />,
    },
    {
      key: tutorDetailsKey.details,
      label: allTutorDictionary.tutorDetails,
      children: <TutorDetail />,
    },
  ];
  
  useBreadCrumbs(tutorsDetailsBreadcrumb);

  return (
    <Tabs 
      size="large" 
      items={tutorTabs} 
      defaultActiveKey={tutorDetailsKey.rating}
    />
  );
};
