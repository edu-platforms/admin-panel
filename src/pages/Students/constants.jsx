import { studentsDictionary } from "./dictionary";
import { AllStudentActions } from "./All/Actions";
import { Tag } from "antd";
import { ROUTES } from '@/constants';


export const studentAllBreadcrumb = [
  { label: "Students" },
  { label: "All Students" },
];

export const dataSource = [
  {
    id: "1",
    studentName: "Asad",
    plan: "2 hours",
    email: "your-email-here@gmail.com",
    paymentStatus: 'Success',
  },
  {
    id: "2",
    studentName: "AAA",
    plan: "1 hours",
    email: "your@Mhere@gmail.com",
    paymentStatus: 'Cancel',
  },
  {
    id: "3",
    studentName: "ZzZ",
    plan: "1 hours",
    email: "your@Mhere@gmail.com",
    paymentStatus: 'Waiting',
  },
];

export const studentColumn = [
  {
    key: "studentName",
    title: studentsDictionary.columns.studentName,
    align: "center",
    dataIndex: "studentName",
  },
  {
    key: "plan",
    title: studentsDictionary.columns.plan,
    align: "center",
    dataIndex: "plan",
  },
  {
    key: "email",
    title: studentsDictionary.columns.email,
    align: "center",
    dataIndex: "email",
  },
  {
    key: "paymentStatus",
    title: studentsDictionary.columns.paymentStatus,
    align: "center",
    dataIndex: "paymentStatus",
    render: (_, { paymentStatus }) => {
      let color;
      if (paymentStatus === 'Success') color = '#059E14';
      else if (paymentStatus === 'Cancel') color = '#DC2626';
      else color = '#E9C923';

      return <Tag key={paymentStatus} style={{ color }}>{paymentStatus}</Tag>
    }
  },
  {
    key: "action",
    title: studentsDictionary.columns.action,
    align: "center",
    render: (value, record) => <AllStudentActions record={record} />,
  },
];

export const studentsDetailBreadcrumb = [
  { label: "Students" },
  { label: "All students", link: ROUTES.students },
  { label: "Payment history" },
];
