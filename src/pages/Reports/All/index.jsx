import { useState, useContext } from "react";
import { useBreadCrumbs } from "@/hooks";
import { allReportsBreadcrumb } from "./constants";
import { TutorTable } from "./Table";
import { MainSearch, Header } from "@/components";
import { ReportsModal } from "./Modal";
import { ModalContext } from "@/context";
import { useSelector } from "react-redux";
import { reportSelector } from "@/store";
import { Filter } from "./Filter";
import { allReportsDictionary } from "./dictionary";
import "./style.scss";

export const AllReports = () => {
  const [query, setQuery] = useState("");
  const { close } = useContext(ModalContext);

  const onSearch = (e) => setQuery(e.target.value);
  const { filterTab } = useSelector((state) => state.reports);

  useBreadCrumbs(allReportsBreadcrumb);

  return (
    <>
      <Header path='Reports' title='All Reports' />
      <MainSearch onChange={onSearch} placeholder={allReportsDictionary.search} />
      {filterTab ? <Filter /> : null}
      <TutorTable />
      <ReportsModal close={close} />
    </>
  );
};
