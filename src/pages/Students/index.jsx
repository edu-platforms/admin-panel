import { useBreadCrumbs, useDebounce } from "@/hooks";
import { studentAllBreadcrumb } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { userActions, usersSelector } from "@/store";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import { MainSearch, Title } from "@/components";
import { studentsDictionary } from "./dictionary";
import { StudentTable } from './Table';
import { Filter } from './Filter';

export const AllStudents = () => {
  const dispatch = useDispatch()
  const { isFilterOpen } = useSelector(usersSelector)
  const { onSearch } = useDebounce(userActions.setQuery);

  const openCloseFilter = () => dispatch(userActions.setIsFilterOpen(!isFilterOpen)) 
  
  useBreadCrumbs(studentAllBreadcrumb);

  return (
    <>
      <Row justify="space-between">
        <Title>{studentsDictionary.title}</Title>

        <Button 
          size="large" 
          type="primary" 
          icon={<FilterOutlined />} 
          onClick={openCloseFilter}
        >
          {studentsDictionary.filter}
        </Button>
      </Row>
      <MainSearch onChange={onSearch} />
      {isFilterOpen ? <Filter /> : null}
      <StudentTable />
    </>
  )
};
