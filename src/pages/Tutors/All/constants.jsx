import { allTutorDictionary } from "./dictionary";
import { View } from "@/components";
import { ROUTES } from "@/constants";
import { dateFormatter } from "@/utils";

export const tutorColumn = [
  {
    title: allTutorDictionary.columns.name,
    dataIndex: "firstname",
    key: "firstname",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.surname,
    dataIndex: "lastname",
    key: "lastname",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.accent,
    dataIndex: "accent",
    key: "accent",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.join,
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    render: (value) => dateFormatter(value),
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
