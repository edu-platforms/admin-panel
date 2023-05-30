import { usePaginator } from "@/hooks";
import { Table } from "antd";
import { dataSource, tutorColumn } from "../constants";


export const TutorTable = () => {
  const { page, perPage, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const loading = false;
  const totalCount = 10;

  return (
    <Table
      columns={tutorColumn}
      dataSource={dataSource}
      rowKey="id"
      loading={loading}
      pagination={{
        onShowSizeChange: handleShowSizeChange,
        onChange: handlePageChange,
        // showSizeChanger: true,
        total: totalCount,
        pageSize: perPage,
        current: page,
      }}
      bordered
    />
  );
};
