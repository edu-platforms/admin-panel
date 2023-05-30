import { Form, Input as AntdInput } from "antd";

export const Input = ({ message, placeholder, ...props }) => (
  <Form.Item
    rules={[
      {
        required: true,
        message: message && message,
      },
    ]}
    {...props}
  >
    <AntdInput placeholder={placeholder} />
  </Form.Item>
);

export const TextArea = ({ placeholder, ...props }) => (
  <Form.Item
    rules={[
      {
        required: true,
      },
    ]}
    {...props}
  >
    <AntdInput.TextArea
      autoSize={{ minRows: 3, maxRows: 5 }}
      placeholder={placeholder}
    />
  </Form.Item>
);
