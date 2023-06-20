import { settingsDictionary } from "../dictionary";
import { makePercent, minutesToHours } from "@/utils";
import { EditAction } from "../Action";

export const durationsBreadcrumb = [
  { label: settingsDictionary.title },
  { label: settingsDictionary.duration },
];

export const durationsColumn = [
    {
      title: settingsDictionary.columns.lessonDuration,
      dataIndex: "minut",
      render: (value) => <span>{minutesToHours(value)}</span>
    },
    {
      title: settingsDictionary.columns.priceAdult,
      dataIndex: "priceAdult",
      align: "center",
      render: (value) => <span>{makePercent(value)}</span>
    },
    {
      title: settingsDictionary.columns.priceKid,
      dataIndex: "priceKid",
      align: "center",
      render: (value) => <span>{makePercent(value)}</span>
    },
    {
      title: settingsDictionary.columns.actions,
      align: "center",
      render: (_, record) => <EditAction record={record} />,
    },
  ];
  