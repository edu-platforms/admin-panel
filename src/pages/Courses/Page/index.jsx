import { useDebounce, useBreadCrumbs } from "@/hooks";
import { allCoursesBreadcrumb } from "../constants";
import { courseActions } from "@/store";
import { Title, MainSearch } from "@/components";
import { RequestsTable } from "../Table";
import { courseDictionary } from "../dictionary";

export const AllCourses = () => {
  const { onSearch } = useDebounce(courseActions.setQuery);
  useBreadCrumbs(allCoursesBreadcrumb);

  return (
    <>
      <Title>{courseDictionary.title}</Title>
      <MainSearch onChange={onSearch} />
      <RequestsTable />
    </>
  );
};
