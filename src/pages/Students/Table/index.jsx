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
    loading,
  } = useSelector(usersSelector);
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

  console.log(students);
  const getData = async () => {
    const params = { search, page, limit };

    dispatch(getStudents(params));
  };

  useEffect(() => {
    getData();
  }, [search, page, limit]);

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
