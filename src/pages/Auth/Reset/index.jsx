import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { Form, Input } from "antd";
import { PasswordField } from "../Fields";
import { checkCode } from "@/store";
import { getLocalStorage } from "@/utils";
import { authDictionary } from "../dictionary";

export const Reset = () => {
  const dispatch = useDispatch();
  const email = getLocalStorage("admin-email");

  const handleFinish = (values) => {
    const params = { email, ...values };

    dispatch(checkCode(params));
  };

  return (
    <AuthForm text={authDictionary.savePassword} onFinish={handleFinish}>
      <Form.Item
        name="otp"
        label={authDictionary.code}
        rules={[
          {
            required: true,
            max: 6,
            min: 1,
          },
        ]}
      >
        <Input placeholder={authDictionary.codePlaceholder} />
      </Form.Item>

      <PasswordField
        name="newPassword"
        label={authDictionary.newPassword}
        placeholder={authDictionary.passwordPlaceholder}
      />

      <PasswordField
        name="confirmNewPassword"
        label={authDictionary.confirmNewPassword}
        placeholder={authDictionary.passwordPlaceholder}
      />
    </AuthForm>
  );
};
