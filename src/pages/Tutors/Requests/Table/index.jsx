import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaginator } from "@/hooks";
import { usersSelector, getTutorRequests } from "@/store";
import { Table } from "antd";
import { getPaginationParams } from "@/utils";
import { dataSource, requestsColumn } from "../constants";

export const RequestsTable = () => {
  const dispatch = useDispatch();

  const {
    data: { tutorRequests },
    total,
    search,
    loading,
  } = useSelector(usersSelector);
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const getData = async () => {
    const params = { search, page, limit };

    dispatch(getTutorRequests(params));
  };

  useEffect(() => {
    getData();
  }, [search, page, limit]);

  return (
    <Table
      columns={requestsColumn}
      dataSource={tutorRequests}
      rowKey="id"
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
