import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaginator } from "@/hooks";
import { getReports, reportsSelector } from "@/store";
import { Table } from "antd";
import { reportColumn } from "../constants";
import { getPaginationParams } from "@/utils";

export const TutorTable = () => {
  const dispatch = useDispatch();
  const {
    total,
    search,
    reports,
    loading,
  } = useSelector(reportsSelector);
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const getData = async () => {
    const params = { search, page, limit };

    dispatch(getReports(params));
  };

  useEffect(() => {
    getData();
  }, [search, page, limit]);

  return (
    <Table
      rowKey="id"
      bordered
      loading={loading.get}
      columns={reportColumn}
      dataSource={reports}
      pagination={{
        onChange: handlePageChange,
        onShowSizeChange: handleShowSizeChange,
        total,
        current: page,
        pageSize: limit,
        showSizeChanger: true,
        ...getPaginationParams(total),
      }}
    />
  );
};
