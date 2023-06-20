import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { allReportsDictionary } from "../dictionary";
import { useDispatch } from "react-redux";
import { reportActions } from "@/store/reports/features";

export const RequestActions = ({ record }) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(reportActions.setIsModalOpen(true))
    dispatch(reportActions.setReporter(record))
  }

  return (
    <Button type="primary" icon={<EyeOutlined />} onClick={openModal} ghost>
      {allReportsDictionary.view}
    </Button>
  );
};
