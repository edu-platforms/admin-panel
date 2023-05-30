import { useDispatch } from "react-redux";
// import { setOpenVideoModal, setSelectedVideoId } from "@/store";
import { Button, Popover, Typography } from "antd";
import { DashOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { payment } from '@/assets'
import { studentsDictionary } from "../../dictionary";
// import { videosActions } from "@/store";

export const AllStudentActions = ({ record }) => {
  const dispatch = useDispatch();
  const { Text, Title } = Typography

  const openVideoModal = () => {
    // dispatch(videosActions.setOpenVideoModal(true));
    // dispatch(videosActions.setSelectedVideoId(record.id));
  };

  const content = () => (
    <Link to='/students/payment-history'>
      <img style={{ marginRight: '8px' }} src={payment} alt="Payment Icon" />
      <Text>{studentsDictionary.history}</Text>
    </Link>
  )


  return (
    <Popover content={content} trigger="click" placement="left">
      <Button icon={<DashOutlined />} type="default" onClick={openVideoModal}></Button>
    </Popover>
  );
};
