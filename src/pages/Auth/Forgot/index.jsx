import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { EmailField } from "../Fields";
import { resetPassword } from "@/store";
import { authDictionary } from "../dictionary";

export const Forgot = () => {
  const dispatch = useDispatch();

  const handleFinish = (values) => {
    dispatch(resetPassword(values));
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
