import { useEffect } from "react";
import { usePaginator } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getTutors, usersSelector } from "@/store";
import { Table } from "antd";
import { tutorColumn } from "../constants";
import { getPaginationParams } from "@/utils";

export const TutorTable = () => {
  const dispatch = useDispatch()
  const { data: { tutors }, search, loading, total } = useSelector(usersSelector)
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

  const getData = async () => {
    const params = { search, page, limit };

    dispatch(getTutors(params))
  }

  useEffect(() => {
    getData()
  }, [search, page, limit])

  return (
    <Table
      rowKey="id"
      bordered
      columns={tutorColumn}
      dataSource={tutors}
      loading={loading.get}
      pagination={{
        onShowSizeChange: handleShowSizeChange,
        onChange: handlePageChange,
        showSizeChanger: true,
        total,
        pageSize: limit,
        current: page,
        ...getPaginationParams(total),
      }}
    />
  );
};
