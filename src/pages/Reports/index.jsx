import { useBreadCrumbs, useDebounce } from "@/hooks";
import { useSelector } from "react-redux";
import { allReportsBreadcrumb } from "./constants";
import { reportActions, reportsSelector } from "@/store";
import { MainSearch, Title } from "@/components";
import { TutorTable } from "./Table";
import { ReportsModal } from "./Modal";
import { allReportsDictionary } from "./dictionary";

export const AllReports = () => {
  const { onSearch } = useDebounce(reportActions.setQuery);
  const { isModalOpen } = useSelector(reportsSelector)

  useBreadCrumbs(allReportsBreadcrumb);

  return (
    <>
      <Title>{allReportsDictionary.title}</Title>
      <MainSearch onChange={onSearch} placeholder={allReportsDictionary.search} />
      <TutorTable />
      {
        isModalOpen ? <ReportsModal /> : null
      }
    </>
  );
};
