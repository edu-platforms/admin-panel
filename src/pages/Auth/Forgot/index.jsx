import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { EmailField } from "../Fields";
import { sendEmail } from "@/store";
import { authDictionary } from "../dictionary";

export const Forgot = () => {
  const dispatch = useDispatch();

  const handleFinish = (values) => {
    dispatch(sendEmail(values));
  };

  return (
    <AuthForm text={authDictionary.resetPassword} onFinish={handleFinish}>
      <EmailField
        value={"mansurov.jr@mail.ru"}
        label={authDictionary.yourEmail}
        placeholder={authDictionary.forgetPlaceholder}
      />
    </AuthForm>
  );
};
