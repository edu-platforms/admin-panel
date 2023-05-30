import { Col, Form, Button, Modal, Upload, message } from "antd";
import { useUpload } from "@/hooks";
import { uploadFile } from "@/assets";
import { courseDictionary } from "../dictionary";
import { VALID_MIME_TYPES } from "@/utils";
import { UploadOutlined } from "@ant-design/icons";

export const CourseUploads = ({ files, setFiles }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { image, presentation } = files;

  const {
    previewOpen,
    previewImage,
    previewTitle,
    beforeUpload,
    handleCancel,
    handlePreview,
  } = useUpload(messageApi);

  const handleImageChange = ({ fileList: newFileList }) => {
    setFiles({ ...files, image: newFileList });
  };

  const handlePresentationChange = ({ fileList: newFileList }) => {
    setFiles({ ...files, presentation: newFileList });
  };

  return (
    <>
      <Col span={5}>
        <Form.Item
          name="course_image"
          label={courseDictionary.labels.image}
          rules={[
            {
              required: true,
              validator: async () => {
                if (!image.length) {
                  return Promise.reject(courseDictionary.photo);
                }
              },
            },
          ]}
        >
          <Upload
            beforeUpload={beforeUpload}
            listType="picture-card"
            onPreview={handlePreview}
            fileList={image}
            onChange={handleImageChange}
            maxCount={1}
            accept="image/*"
          >
            {image.length < 1 && <img src={uploadFile} alt={previewTitle} />}
          </Upload>
        </Form.Item>
      </Col>

      <Col span={4}>
        <Form.Item
          name="course_presentation"
          label={courseDictionary.labels.presentation}
          rules={[
            {
              required: true,
              validator: async () => {
                if (!presentation.length) {
                  return Promise.reject(courseDictionary.presentation);
                }
              },
            },
          ]}
        >
          <Upload
            fileList={presentation}
            beforeUpload={() => false}
            onChange={handlePresentationChange}
            accept={VALID_MIME_TYPES.toString()}
            maxCount={1}
          >
            <Button type="primary" size="large" icon={<UploadOutlined />}>
              {courseDictionary.upload}
            </Button>
          </Upload>
        </Form.Item>
      </Col>

      {contextHolder}

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt={previewTitle}
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
