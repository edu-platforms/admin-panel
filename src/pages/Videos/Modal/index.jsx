import { useRef } from "react";
import { Modal, Button, Popconfirm, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { videosSelector, videosActions } from "@/store";
import { videosDictionary } from "../dictionary";
import { addNotification } from "@/utils";

export const VideoModal = ({ link }) => {
  const dispatch = useDispatch();
  const videoLinkRef = useRef(null);
  const { videoModal, selectedVideoId } = useSelector(videosSelector);

  const confirm = () => {
    dispatch(videosActions.setCloseVideoModal());
  };

  const onCancel = () => {
    dispatch(videosActions.setCloseVideoModal());
  };

  const copy = () => {
    const linkToCopy = videoLinkRef.current.src;
    navigator.clipboard.writeText(linkToCopy);
    addNotification('Copied!');
  };

  return (
    <Modal
      open={videoModal}
      onCancel={onCancel}
      centered
      closable={false}
      width={1144}
      footer={null}
    >
      <iframe
        ref={videoLinkRef}
        width="100%"
        height="500px"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <Space>
        <Button onClick={copy} size="large" type="primary">
          {videosDictionary.copyVideoURL}
        </Button>
        <Popconfirm
          description={videosDictionary.areYouSure}
          onConfirm={confirm}
          okText={videosDictionary.yes}
          cancelText={videosDictionary.no}
        >
          <Button size="large" danger type="primary">
            {videosDictionary.deleteVideo}
          </Button>
        </Popconfirm>
      </Space>
    </Modal>
  );
};
