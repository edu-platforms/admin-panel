import { constantsDictionary } from "./dictionary";
import { ROUTES } from "./routes";
import {
  FundOutlined,
  FolderOutlined,
  ProfileOutlined,
  SettingOutlined,
  FileTextOutlined,
  PieChartOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

export const mainMenuList = [
  {
    label: constantsDictionary.dashboard,
    key: ROUTES.dashboard,
    icon: <ProfileOutlined />,
  },
  {
    label: constantsDictionary.tutors,
    icon: <SettingOutlined />,
    children: [
      {
        label: constantsDictionary.tutorsAll,
        key: ROUTES.tutors,
      },
      {
        label: constantsDictionary.tutorRequests,
        key: ROUTES.tutorRequests,
      },
    ],
  },
  {
    label: constantsDictionary.courses,
    icon: <FundOutlined />,
    children: [
      {
        label: constantsDictionary.coursesAll,
        key: ROUTES.courses,
      },
      {
        label: constantsDictionary.addCourse,
        key: ROUTES.addCourse,
      },
    ],
  },
  {
    label: constantsDictionary.videos,
    key: ROUTES.videos,
    icon: <PlayCircleOutlined />,
  },
  {
    label: constantsDictionary.students,
    key: ROUTES.students,
    icon: <FileTextOutlined />,
  },
  {
    label: constantsDictionary.reports,
    key: ROUTES.reports,
    icon: <FolderOutlined />,
  },
  {
    label: constantsDictionary.salary,
    key: ROUTES.salary,
    icon: <PieChartOutlined />,
  },
  {
    label: constantsDictionary.settings,
    key: ROUTES.settings,
    icon: <SettingOutlined />,
  },
];
