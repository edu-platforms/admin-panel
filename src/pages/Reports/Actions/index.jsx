import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { allReportsDictionary } from "../dictionary";
import { useDispatch } from "react-redux";
import { reportActions } from "@/store/reports/features";
import { makeFullName } from "@/utils";

export const RequestActions = ({ record }) => {
  const dispatch = useDispatch()

  const openModal = () => {
    const reporter = {
      id: record.id,
      fullName: makeFullName(record.teacher),
      position: record.teacher.displayname
    }

    dispatch(reportActions.setIsModalOpen(true))
    dispatch(reportActions.setReporter(reporter))
  }

  return (
    <Button type="primary" icon={<EyeOutlined />} onClick={openModal} ghost>
      {allReportsDictionary.view}
    </Button>
  );
};
