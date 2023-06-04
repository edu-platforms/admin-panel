import { useDebounce, useBreadCrumbs } from "@/hooks";
import { tutorAllBreadcrumb } from "./constants";
import { Title, MainSearch } from "@/components";
import { TutorTable } from "./Table";
import { allTutorDictionary } from "./dictionary";
import { userActions } from "@/store";

export const AllTutors = () => {
  const { onSearch } = useDebounce(userActions.setQuery);
  useBreadCrumbs(tutorAllBreadcrumb);

  return (
    <>
      <Title>{allTutorDictionary.title}</Title>
      <MainSearch onChange={onSearch} />
      <TutorTable />
    </>
  );
};
