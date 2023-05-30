import { SalaryActions } from "./Actions";
import { salaryDictionary } from "./dictionary";
import { ROUTES } from "@/constants";
export const data={
  name:"Saidalikhon Sobirov",
  cardNumber:"**** 6950",
  price:"610,00",
  fees:"458,00",
  balance:"152,00",
  paymentHistory:[
    {
      time: "05:45PM  05/05/2023",
      price: "300 USD",
      card: "**** 6950",
    },
    {
      time: "05:45PM  05/05/2023",
      price: "300 USD",
      card: "**** 6950",
    },
    {
      time: "05:45PM  05/05/2023",
      price: "300 USD",
      card: "**** 6950",
    },
    {
      time: "05:45PM  05/05/2023",
      price: "300 USD",
      card: "**** 6950",
    }
  ]
}
export const dataSource = [
  {
    id: "1",
    name: "Alexander Makedonsky",
    balance: "152,64 USD",
    fees:"458,00 USD",
    income:"610,64 USD"
  },
  {
    id: "2",
    name: "Alexander Makedonsky",
    balance: "152,64 USD",
    fees:"458,00 USD",
    income:"610,64 USD"
  },
  {
    id: "3",
    name: "Alexander Makedonsky",
    balance: "152,64 USD",
    fees:"458,00 USD",
    income:"610,64 USD"
  },
  {
    id: "4",
    name: "Alexander Makedonsky",
    balance: "152,64 USD",
    fees:"458,00 USD",
    income:"610,64 USD"
  },
];

export const salaryColumn = [
  {
    title: salaryDictionary.columns.name,
    dataIndex: "name",
    key: "name",
    align: "start",
  },
  {
    title: salaryDictionary.columns.balance,
    dataIndex: "balance",
    key: "experience",
    align: "start",
  },
  {
    title: salaryDictionary.columns.fees,
    dataIndex: "fees",
    key: "name",
    align: "start",
  },
  {
    title: salaryDictionary.columns.income,
    dataIndex: "income",
    key: "experience",
    align: "start",
  },
  {
    title: salaryDictionary.columns.actions,
    key: "actions",
    align: "center",
    render: (value, record) => <SalaryActions record={record} />,
  },
];

export const salaryBreadcrumb = [
    { label: "Salary" },
  ]; 
export const salaryDetailsBreadcrumb = [
    { label: "Salary", link: ROUTES.salary },
    { label: "Details" },
  ]; 

