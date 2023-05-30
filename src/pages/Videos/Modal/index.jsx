import { useRef, useState } from "react";
import { Modal, Button, Popconfirm, message, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { videosSelector, videosActions } from "@/store";
import { videosDictionary } from "../dictionary";

export const VideoModal = ({ link }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const [loading, setLoading] = useState(null);
  const videoLinkRef = useRef(null);

  const dispatch = useDispatch();

  const { videoModal, selectedVideoId } = useSelector(videosSelector);

  const confirm = () => {
    message.success("DELETE");
    dispatch(videosActions.setCloseVideoModal());
  };

  const onCancel = () => {
    dispatch(videosActions.setCloseVideoModal());
  };

  const copy = () => {
    const linkToCopy = videoLinkRef.current.src;
    navigator.clipboard.writeText(linkToCopy);
    setCopySuccess('Copied!');
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
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
        <Button onClick={copy} size="large" type="primary" loading={loading}>
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
