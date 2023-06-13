import { Tag } from "antd";
import { RequestActions } from "./Actions";
import { allReportsDictionary } from "./dictionary";
import { dateFormatter, makeFullName } from "@/utils";

export const reportColumn = [
  {
    title: allReportsDictionary.columns.title,
    dataIndex: "descr",
    align: "center",
  },
  {
    title: allReportsDictionary.columns.name,
    dataIndex: "fullName",
    align: "center",
    render: (_, record) => <span>{makeFullName(record.teacher)}</span>,
  },
  {
    title: allReportsDictionary.columns.time,
    dataIndex: "createdAt",
    align: "center",
    render: (value) => <span>{dateFormatter(value)}</span>,
  },
  {
    title: allReportsDictionary.columns.status,
    dataIndex: "isActive",
    align: "center",
    render: (value) =>
      <Tag color={value === "IsActive" ? "green" : "blue"}>
        {value === "IsActive"
          ? allReportsDictionary.active
          : allReportsDictionary.solved}
      </Tag>,
  },
  {
    title: allReportsDictionary.columns.actions,
    align: "center",
    render: (_, record) => <RequestActions record={record} />,
  },
];

export const allReportsBreadcrumb = [{ label: "Reports" }];
