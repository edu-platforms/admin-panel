import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthForm } from "../Form";
import { Form, Input, notification } from "antd";
import { authActions, authSelector, checkCode } from "@/store";
import { authDictionary } from "../dictionary";
import { authLoadings } from "../constants";

export const CheckCode = () => {
  const dispatch = useDispatch();
  const { isEmailSend } = useSelector(authSelector)
  const [api, contextHolder] = notification.useNotification();

  const handleFinish = (value) => dispatch(checkCode(value));

  useEffect(() => {
    if (isEmailSend) {
      api.open({
        message: authDictionary.message,
        description: authDictionary.description,
        duration: 3,
      });
    }

    return () => dispatch(dispatch(authActions.setIsEmailSend(false)))
  }, [isEmailSend])

  return (
    <AuthForm loader={authLoadings.check} text={authDictionary.resetPassword} onFinish={handleFinish}>
      {contextHolder}

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

    </AuthForm>
  );
};
