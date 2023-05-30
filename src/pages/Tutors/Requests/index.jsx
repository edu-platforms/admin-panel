import { useDebounce, useBreadCrumbs } from "@/hooks";
import { requestBreadcrumb } from "./constants";
import { requestDictionary } from "./dictionary";
import { userActions } from "@/store";
import { Title, MainSearch } from "@/components";
import { RequestsTable } from "./Table";

export const TutorRequests = () => {
  const { onSearch } = useDebounce(userActions.setQuery);
  useBreadCrumbs(requestBreadcrumb);

  return (
    <>
      <Title>{requestDictionary.title}</Title>

      <MainSearch
        placeholder={requestDictionary.searchTutor}
        onChange={onSearch}
      />
      <RequestsTable />
    </>
  );
};
