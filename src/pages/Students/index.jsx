import { useBreadCrumbs, useDebounce } from "@/hooks";
import { studentAllBreadcrumb } from "./constants";
import { useSelector } from "react-redux";
import { userActions } from "@/store";
import { Header, MainSearch } from "@/components";
import { studentsDictionary } from "./dictionary";
import { Filter } from './Filter';
import { StudentTable } from './Table';
// import PaymentHistory from "./Details";

export const AllStudents = () => {

  const { filterTab } = useSelector((state) => state.students)
  const { onSearch } = useDebounce(userActions.setQuery);

  useBreadCrumbs(studentAllBreadcrumb);

  return (
    <>
      <Header route='Students' title={studentsDictionary.title} />
      <MainSearch onChange={onSearch} />
      {filterTab ? <Filter /> : null}
      <StudentTable />
    </>
  )
};
