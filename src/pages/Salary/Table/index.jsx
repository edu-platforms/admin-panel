import { usePaginator } from "@/hooks";
import { Table } from "antd";
import { dataSource, salaryColumn } from "../constants";
import { getPaginationParams } from "@/utils";

export const SalaryTable = () => {
  const { page, perPage, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const totalCount = 10;


  return (
    <Table
      rowKey="id"
      columns={salaryColumn}
      dataSource={dataSource}
      pagination={{
        onShowSizeChange: handleShowSizeChange,
        onChange: handlePageChange,
        showSizeChanger: true,
        total: totalCount,
        pageSize: perPage,
        current: page,
        ...getPaginationParams(totalCount),
      }}
      bordered
    />
  );
};
