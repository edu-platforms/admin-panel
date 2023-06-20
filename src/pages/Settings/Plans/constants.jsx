import { dateFormat, makePercent } from "@/utils";
import { EditAction } from "../Action";
import { settingsDictionary } from "../dictionary";

export const plansBreadcrumb = [
  { label: settingsDictionary.title },
  { label: settingsDictionary.plans },
];

export const plansColumn = [
    {
      title: settingsDictionary.columns.subPlan,
      dataIndex: "name",
    },
    {
      title: settingsDictionary.columns.subDiscount,
      dataIndex: "discountPercent",
      align: "center",
      render: (value) => <span>{makePercent(value)}</span>
    },
    {
      title: settingsDictionary.columns.createdAt,
      dataIndex: "createdAt",
      align: "center",
      render: (value) => <span>{dateFormat(value)}</span>
    },
    {
      title: settingsDictionary.columns.actions,
      align: "center",
      render: (_, record) => <EditAction record={record} />,
    },
  ];