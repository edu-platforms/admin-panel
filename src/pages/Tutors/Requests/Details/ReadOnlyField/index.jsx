import { Form, Input } from "antd";

export const ReadOnlyField = ({ ...props }) => {
  return (
    <Form.Item {...props}>
      <Input readOnly />
    </Form.Item>
  );
};
