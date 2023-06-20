import { makePercent, minutesToHours } from "@/utils";
import { settingsDictionary } from "../dictionary";
import { EditAction } from "../Action";

export const configurationsBreadcrumb = [
  { label: settingsDictionary.title },
  { label: settingsDictionary.configuration },
];

export const configurationColumn = [
    {
      title: settingsDictionary.columns.salaryAdult,
      dataIndex: "teacherSalaryForAdult",
      render: (value) => <span>{makePercent(value)}</span>
    },
    {
      title: settingsDictionary.columns.salaryKids,
      dataIndex: "teacherSalaryForKid",
      align: "center",
      render: (value) => <span>{makePercent(value)}</span>
    },
    {
      title: settingsDictionary.columns.trial,
      dataIndex: "oneLessonDuration",
      align: "center",
      render: (value) => <span>{minutesToHours(value)}</span>
    },
    {
      title: settingsDictionary.columns.actions,
      align: "center",
      render: (_, record) => <EditAction record={record} />,
    },
  ];
  