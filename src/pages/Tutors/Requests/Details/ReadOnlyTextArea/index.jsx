import { Form, Input } from "antd";

export const ReadOnlyTextArea = ({ ...props }) => {
  const { TextArea } = Input;
  return (
    <Form.Item {...props}>
      <TextArea readOnly autoSize={{ minRows: 2, maxRows: 10 }} />
    </Form.Item>
  );
};
