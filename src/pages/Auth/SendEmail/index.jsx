import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { EmailField } from "../Fields";
import { sendEmail } from "@/store";
import { authDictionary } from "../dictionary";
import { authLoadings } from "../constants";

export const SendEmail = () => {
  const dispatch = useDispatch();

  const handleFinish = (value) => dispatch(sendEmail(value));

  return (
    <AuthForm loader={authLoadings.email} text={authDictionary.resetPassword} onFinish={handleFinish}>
      <EmailField
        value={"mansurov.jr@mail.ru"}
        label={authDictionary.yourEmail}
        placeholder={authDictionary.forgetPlaceholder}
      />
    </AuthForm>
  );
};
