import { usePaginator } from "@/hooks";
import { Table } from "antd";
import { getPaginationParams } from "@/utils";
import { dataSource, studentColumn } from "../../constants";

export const StudentTable = () => {
  const { page, perPage, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const loading = false;
  const totalCount = 10;

  return (
    <Table
      rowKey="id"
      loading={loading}
      columns={studentColumn}
      dataSource={dataSource}
      pagination={{
        current: page,
        pageSize: perPage,
        total: totalCount,
        onChange: handlePageChange,
        onShowSizeChange: handleShowSizeChange,
        ...getPaginationParams(10),
      }}
      bordered
    />
  );
};
