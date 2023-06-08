import { useBreadCrumbs, useDebounce } from "@/hooks";
import { allReportsBreadcrumb } from "./constants";
import { reportActions } from "@/store";
import { MainSearch, Title } from "@/components";
import { TutorTable } from "./Table";
import { ReportsModal } from "./Modal";
import { allReportsDictionary } from "./dictionary";

export const AllReports = () => {
  const { onSearch } = useDebounce(reportActions.setQuery);
  useBreadCrumbs(allReportsBreadcrumb);

  return (
    <>
      <Title>{allReportsDictionary.title}</Title>
      <MainSearch onChange={onSearch} placeholder={allReportsDictionary.search} />
      <TutorTable />
      <ReportsModal />
    </>
  );
};
