import { View } from "@/components";
import { requestDictionary } from "./dictionary";
import { ROUTES } from "@/constants";

export const requestsColumn = [
  {
    title: requestDictionary.columns.name,
    dataIndex: "firstname",
    key: "firstname",
    align: "center",
  },
  {
    title: requestDictionary.columns.surname,
    dataIndex: "lastname",
    key: "lastname",
    align: "center",
  },
  {
    title: requestDictionary.columns.accent,
    dataIndex: "accent",
    key: "accent",
    align: "center",
  },
  {
    title: requestDictionary.columns.from,
    dataIndex: "address",
    key: "address",
    align: "center",
  },
  {
    title: requestDictionary.columns.actions,
    dataIndex: "id",
    align: "center",
    render: (value) => <View link={`${ROUTES.tutorRequests}/${value}`} />,
  },
];

export const requestBreadcrumb = [
  { label: "Tutors" },
  { label: "New tutor requests" },
];

export const requestDetailsBreadcrumb = [
  { label: "Tutors" },
  { label: "New tutor requests", link: ROUTES.tutorRequests },
  { label: "View profile" },
];
