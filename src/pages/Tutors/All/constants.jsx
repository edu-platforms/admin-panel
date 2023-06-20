import { allTutorDictionary } from "./dictionary";
import { View } from "@/components";
import { ROUTES } from "@/constants";
import { getFullDateFormat } from "@/utils";

export const tutorColumn = [
  {
    title: allTutorDictionary.columns.name,
    dataIndex: "firstname",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.surname,
    dataIndex: "lastname",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.accent,
    dataIndex: "accent",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.join,
    dataIndex: "createdAt",
    align: "center",
    render: (value) => getFullDateFormat(value),
  },
  {
    title: allTutorDictionary.columns.actions,
    dataIndex: "id",
    align: "center",
    render: (value) => <View link={`${ROUTES.tutors}/${value}`} />,
  },
];

export const tutorAllBreadcrumb = [
  { label: "Tutors" },
  { label: "All tutors" },
];


export const tutorsDetailsBreadcrumb = [
  { label: "Tutors" },
  { label: "All tutors", link: ROUTES.tutors },
  { label: "View profile" },
];
