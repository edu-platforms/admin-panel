import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { PasswordField } from "../Fields";
import { checkCode } from "@/store";
import { authDictionary } from "../dictionary";
import { authLoadings } from "../constants";

export const Reset = () => {
  const dispatch = useDispatch();

  const handleFinish = (value) => dispatch(checkCode(value));

  return (
    <AuthForm loader={authLoadings.reset} text={authDictionary.savePassword} onFinish={handleFinish}>
      <PasswordField
        name="password"
        label={authDictionary.newPassword}
        placeholder={authDictionary.passwordPlaceholder}
      />

      <PasswordField
        name="passwordConfirm"
        label={authDictionary.confirmNewPassword}
        placeholder={authDictionary.passwordPlaceholder}
      />
    </AuthForm>
  );
};
