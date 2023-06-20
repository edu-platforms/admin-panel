import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfigurations, settingsSelector } from "@/store";
import { Table } from "antd";
import { configurationColumn } from "../constants";


export const ConfigurationTable = () => {
  const dispatch = useDispatch();
  const {
    data: {configurations},
    loading,
  } = useSelector(settingsSelector);
 
  const getData = async () => dispatch(getConfigurations());

  useEffect(() => {
    getData() 
  }, []);

  return (
    <Table
      rowKey="id"
      bordered
      pagination={false} 
      loading={loading.get}
      columns={configurationColumn}
      dataSource={configurations}
    />
  );
};
