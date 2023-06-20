import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonDurationWeek, settingsSelector } from "@/store";
import { Table } from "antd";
import { durationsColumn } from "../constants";

export const DurationsTable = () => {
  const dispatch = useDispatch();
  const {
    data: {lessonDurationWeeks},
    loading,
  } = useSelector(settingsSelector);
 
  const getData = async () => dispatch(getLessonDurationWeek());

  useEffect(() => {
    getData();
  }, []);

  return (
    <Table
      rowKey="id"
      bordered
      pagination={false} 
      loading={loading.get}
      columns={durationsColumn}
      dataSource={lessonDurationWeeks}
    />
  );
};
