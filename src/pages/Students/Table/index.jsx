import { usePaginator } from "@/hooks";
import { Table } from "antd";
import { getPaginationParams } from "@/utils";
import { studentColumn } from "../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, usersSelector } from "@/store";

export const StudentTable = () => {
  const dispatch = useDispatch()
  const {
    data: { students },
    total,
    search,
    filter,
    loading,
  } = useSelector(usersSelector);
  const { 
    page, 
    limit, 
    handlePageChange, 
    handleShowSizeChange 
  } = usePaginator();

  const getData = async (filter) => {
    const params = filter ? { search, page, limit, ...filter } : { search, page, limit }

    dispatch(getStudents(params));
  };

  useEffect(() => {
    filter ? getData(filter) : getData()
  }, [search, page, limit, filter]);

  return (
    <Table
      rowKey="id"
      loading={loading.get}
      columns={studentColumn}
      dataSource={students}
      pagination={{
        total,
        current: page,
        pageSize: limit,
        showSizeChanger: true,
        onChange: handlePageChange,
        onShowSizeChange: handleShowSizeChange,
        ...getPaginationParams(total),
      }}
      bordered
    />
  );
};
