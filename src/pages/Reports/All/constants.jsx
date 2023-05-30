import { RequestActions } from "./Actions";
import { Status } from "./Status";
import { allReportsDictionary } from "./dictionary";

export const data = {
  fullName: "Saidalikhon Sobirov",
  position: "Tutor",
  message: "The Report Message add-in provides the option to report both spam and phishing messages. Admins can enable the Report Message add-in for the organization, and individual users can install it for themselves. The Report Phishing add-in provides the option to report only phishing messages."
}

export const dataSource = [
  {
    id: "1",
    title: "This student send me porno photos",
    name: "Teacher Tutor",
    time: "05:46PM  12/04/2023",
    status: "Active",
  },
  {
    id: "2",
    title: "This student use dirty words!",
    name: "Alex",
    time: "05:40PM  11/04/2023",
    status: "Solved",
  },
  {
    id: "3",
    title: "This tutor cancelled lesson",
    name: "John Doe",
    time: "01:46PM  04/04/2023",
    status: "Solved",
  },
];

export const reportColumn = [
  {
    title: allReportsDictionary.columns.title,
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: allReportsDictionary.columns.name,
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: allReportsDictionary.columns.time,
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: allReportsDictionary.columns.status,
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (value) => <Status status={value} />,
  },
  {
    title: allReportsDictionary.columns.actions,
    key: "status",
    align: "center",
    render: (record) => <RequestActions record={record} />,
  },
];

export const allReportsBreadcrumb = [
  { label: "Reports" },
  { label: "All reports" },
];
