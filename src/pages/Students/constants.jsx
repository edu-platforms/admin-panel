import { studentsDictionary } from "./dictionary";
import { AllStudentActions } from "./Actions";
import { Tag } from "antd";
import { ROUTES } from '@/constants';
import { makeFullName } from "@/utils";

const colors = ['#059E14', '#DC2626', '#E9C923'];

export const studentColumn = [
  {
    title: studentsDictionary.columns.studentName,
    align: "center",
    dataIndex: "studentFullName",
    render: (_, record) => <span>{makeFullName(record)}</span>
  },
  {
    title: studentsDictionary.columns.plan,
    align: "center",
    dataIndex: "plan",
  },
  {
    title: studentsDictionary.columns.email,
    align: "center",
    dataIndex: "email",
  },
  {
    key: "paymentStatus",
    title: studentsDictionary.columns.paymentStatus,
    align: "center",
    dataIndex: "paymentStatus",
    render: (status) => {      
      return <Tag color={colors[status === 'Success' && 0 || status === 'Cancel' && 1|| 2]}>{status}</Tag>
    }
  },
  {
    key: "action",
    title: studentsDictionary.columns.action,
    align: "center",
    render: (_, record) => <AllStudentActions record={record} />,
  },
];

export const paymentOptions = [
  { value: "unsubscribe", label: "Unsubscribe" },
  { value: "subscribe", label: "Subscribe" },
]

export const studentsDetailBreadcrumb = [
  { label: "Students" },
  { label: "All students", link: ROUTES.students },
  { label: "Payment history" },
];

export const studentAllBreadcrumb = [{ label: "Students" }];
