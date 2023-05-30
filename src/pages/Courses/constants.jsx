import { RequestActions } from "./Actions";
import { courseDictionary } from "./dictionary";
import { dateFormatter } from "@/utils";
import { ROUTES } from "@/constants";

export const courseDetailsColumn = [
  {
    title: courseDictionary.columns.name,
    dataIndex: "course_name",
    key: "course_name",
  },
  {
    title: courseDictionary.columns.experience,
    dataIndex: "course_level",
    key: "course_level",
  },
  {
    title: courseDictionary.columns.createdAt,
    dataIndex: "course_created_at",
    key: "course_created_at",
    render: (value) => dateFormatter(value),
  },
  {
    title: courseDictionary.columns.actions,
    key: "actions",
    align: "center",
    render: (_, record) => <RequestActions record={record} />,
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
