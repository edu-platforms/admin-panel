import { Form, Input } from "antd";

export const EmailField = ({ label, value, placeholder }) => {
  return (
    <Form.Item
      name="email"
      label={label}
      initialValue={value}
      rules={[
        {
          required: true,
          type: "email",
        },
      ]}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export const PasswordField = ({ name, label, value, placeholder }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      initialValue={value}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input.Password placeholder={placeholder} />
    </Form.Item>
  );
};
