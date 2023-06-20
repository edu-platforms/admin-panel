import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans, settingsSelector } from "@/store";
import { Table } from "antd";
import { plansColumn } from "../constants";

export const PlansTable = () => {
  const dispatch = useDispatch();
  const {
    data: {plans},
    loading,
  } = useSelector(settingsSelector);
 
  const getData = async () => dispatch(getPlans());

  useEffect(() => {
    getData();
  }, []);

  return (
    <Table
      rowKey="id"
      bordered
      pagination={false} 
      loading={loading.get}
      columns={plansColumn}
      dataSource={plans}
    />
  );
};
