import { useEffect } from "react";
import { usePaginator } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector, getCourses } from "@/store";
import { Table } from "antd";
import { courseDetailsColumn } from "../constants";
import { getPaginationParams } from "@/utils";

export const RequestsTable = () => {
  const dispatch = useDispatch();

  const {
    data: { courses },
    total,
    search,
    loading,
  } = useSelector(coursesSelector);
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const getData = async () => {
    const params = { search, page, limit };

    dispatch(getCourses(params));
  };

  useEffect(() => {
    getData();
  }, [search, page, limit]);

  return (
    <Table
      rowKey="course_id"
      columns={courseDetailsColumn}
      dataSource={courses}
      loading={loading.get}
      pagination={{
        total,
        onShowSizeChange: handleShowSizeChange,
        onChange: handlePageChange,
        showSizeChanger: true,
        pageSize: limit,
        current: page,
        ...getPaginationParams(total),
      }}
      bordered
    />
  );
};
