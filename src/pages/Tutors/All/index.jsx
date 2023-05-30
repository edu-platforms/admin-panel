import { useBreadCrumbs } from "@/hooks";
import { tutorAllBreadcrumb } from "./constants";
import { Title, MainSearch } from "@/components";
import { TutorTable } from "./Table";
import { allTutorDictionary } from "./dictionary";

export const AllTutors = () => {
  useBreadCrumbs(tutorAllBreadcrumb);

  const onSearch = () => { };

  return (
    <>
      <Title>{allTutorDictionary.title}</Title>
      <MainSearch onChange={onSearch} />
      <TutorTable />
    </>
  );
};
