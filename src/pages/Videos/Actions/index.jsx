import { useDispatch } from "react-redux";
import { setOpenVideoModal, setSelectedVideoId } from "@/store";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { videosDictionary } from "../dictionary";
import { videosActions } from "@/store";

export const RequestActions = ({ record }) => {
  const dispatch = useDispatch();

  const openVideoModal = () => {
    dispatch(videosActions.setOpenVideoModal(true));
    dispatch(videosActions.setSelectedVideoId(record.id));
  };

  return (
    <Button icon={<EyeOutlined />} type="default" onClick={openVideoModal}>
      {videosDictionary.view}
    </Button>
  );
};
