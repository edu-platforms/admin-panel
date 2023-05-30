import { allTutorDictionary } from "./dictionary";
import { View } from "@/components";
import { ROUTES } from "@/constants";

export const dataSource = [
  {
    id: "1",
    name: "Asad",
    surname: "ZZZ",
    accent: "British",
    join: '12/05/2022',
  },
  {
    id: "2",
    name: "Jhone",
    surname: "Doe",
    accent: "British",
    join: '12/05/2022',
  },
];

export const tutorColumn = [
  {
    title: allTutorDictionary.columns.name,
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: allTutorDictionary.columns.surname,
    dataIndex: "surname",
    key: "surname",
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
    dataIndex: "join",
    key: "join",
    align: "center",
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
