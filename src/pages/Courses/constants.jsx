import { RequestActions } from "./Actions";
import { courseDictionary } from "./dictionary";
import { dateFormatter } from "@/utils";
import { ROUTES } from "@/constants";

export const courseDetailsColumn = [
  {
    title: courseDictionary.columns.name,
    dataIndex: "name",
  },
  {
    title: courseDictionary.columns.experience,
    dataIndex: "level",
  },
  {
    title: courseDictionary.columns.createdAt,
    dataIndex: "createdAt",
    render: (value) => dateFormatter(value),
  },
  {
    title: courseDictionary.columns.actions,
    align: "center",
    dataIndex: "id",
    render: (value) => <RequestActions id={value} />,
  },
];

export const experienceLevel = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const allCoursesBreadcrumb = [
  { label: "Courses" },
  { label: "All courses" },
];

export const courseDetailsBreadcrumb = [
  { label: "Courses" },
  { label: "All courses", link: ROUTES.courses },
  { label: "Course details" },
];

export const createCourseAllBreadcrumb = [
  { label: "Courses" },
  { label: "Add new course" },
];
