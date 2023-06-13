import { RequestActions } from "./Actions";
import { videosDictionary } from "./dictionary";

export const videoAllBreadcrumb = [{ label: "Videos" }];

export const dataSource = [
  {
    id: "1",
    studentName: "Asad",
    tutorName: "Tutor",
    recordTime: "05:46PM  12/04/2023",
    duration: '28 min',
    link: 'https://youtu.be/9egKxXu499I'
  },
  {
    id: "2",
    studentName: "Jhone",
    tutorName: "im Tutor",
    recordTime: "05:46PM  12/04/2023",
    duration: '28 min',
    link: 'https://youtu.be/JGC7aAC-3y8'
  },
];

export const videoColumn = [
  {
    key: "studentName",
    title: videosDictionary.columns.studentName,
    align: "center",
    dataIndex: "studentName",
  },
  {
    key: "tutorName",
    title: videosDictionary.columns.tutorName,
    align: "center",
    dataIndex: "tutorName",
  },
  {
    key: "recordTime",
    title: videosDictionary.columns.recordTime,
    align: "center",
    dataIndex: "recordTime",
  },
  {
    key: "duration",
    title: videosDictionary.columns.duration,
    align: "center",
    dataIndex: "duration",
  },
  {
    key: "action",
    title: videosDictionary.columns.action,
    align: "center",
    render: (value, record) => <RequestActions record={record} />,
  },
];