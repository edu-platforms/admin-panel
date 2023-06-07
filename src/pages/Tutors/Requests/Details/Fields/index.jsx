import { Form, Input } from "antd";

export const ReadOnlyField = ({ ...props }) =>
  <Form.Item {...props}>
    <Input readOnly />
  </Form.Item>

export const ReadOnlyTextArea = ({ ...props }) =>
  <Form.Item {...props}>
    <Input.TextArea readOnly autoSize={{ minRows: 2, maxRows: 10 }} />
  </Form.Item>

