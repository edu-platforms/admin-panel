import { useContext } from "react";
import { Button } from "antd";
import { ModalContext } from "@/context";
import { EyeOutlined } from "@ant-design/icons";
import { allReportsDictionary } from "../dictionary";

export const RequestActions = ({ record }) => {
  const { show } = useContext(ModalContext);

  return (
    <Button type="primary" icon={<EyeOutlined />} onClick={show} ghost>
      {allReportsDictionary.view}
    </Button>
  );
};
