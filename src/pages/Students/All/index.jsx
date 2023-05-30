import { useBreadCrumbs } from "@/hooks";
import { studentAllBreadcrumb } from "../constants";
import { useSelector } from "react-redux";
import { Header, MainSearch } from "@/components";
import { studentsDictionary } from "../dictionary";
import { Filter } from './Filter';
import { StudentTable } from './Table';
// import PaymentHistory from "./Details";

export const AllStudents = () => {
  useBreadCrumbs(studentAllBreadcrumb);

  const { filterTab } = useSelector((state) => state.students)

  return (
    <>
      <Header route='Students' title={studentsDictionary.title} />
      <MainSearch />
      {filterTab ? <Filter /> : null}
      <StudentTable />
    </>
  )
};
