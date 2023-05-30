import { Form, Input } from "antd";
export const Field = ({ placeholder, ...props }) => {
  return (
    <Form.Item {...props} rules={[{ required: true }]}>
      <Input placeholder={placeholder} />
    </Form.Item>
  )
}
