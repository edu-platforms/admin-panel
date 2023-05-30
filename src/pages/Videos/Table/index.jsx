import { usePaginator } from "@/hooks";
import { Table } from "antd";
import { dataSource, videoColumn } from "../constants";
import { getPaginationParams } from "@/utils";

export const VideoTable = () => {
  const { page, perPage, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const loading = false;
  const totalCount = 10;

  return (
    <Table
      rowKey="id"
      loading={loading}
      columns={videoColumn}
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
