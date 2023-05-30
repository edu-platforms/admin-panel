import { RequestActions } from "./Actions";
import { requestDictionary } from "./dictionary";
import { ROUTES } from "@/constants";

export const dataSource = [
  {
    id: "1",
    name: "Mike",
    surname: "Doe",
    accent: "British",
    from: "British",
  },
  {
    id: "2",
    name: "Jhone",
    surname: "Doe",
    accent: "British",
    from: "British",
  },
];

export const requestsColumn = [
  {
    title: requestDictionary.columns.name,
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: requestDictionary.columns.surname,
    dataIndex: "surname",
    key: "surname",
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
    dataIndex: "from",
    key: "from",
    align: "center",
  },
  {
    title: requestDictionary.columns.actions,
    key: "actions",
    align: "center",
    render: (value, record) => <RequestActions record={record} />,
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
