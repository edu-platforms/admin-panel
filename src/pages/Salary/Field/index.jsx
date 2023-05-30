import { Form, Input } from "antd"

export const Field = ({ ...props }) => {
  return (
    <Form.Item {...props}>
      <Input readOnly />
    </Form.Item>
  )
}
