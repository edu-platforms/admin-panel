import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { authDictionary } from "../dictionary";
import { EmailField, PasswordField } from "../Fields";
import { signIn } from "@/store";

export const SignIn = () => {
  const dispatch = useDispatch();
  const login = { email: "liil.dev@icloud.com", password: "Junior0302" };

  const handleFinish = (values) => {
    dispatch(signIn(values));
  };

  return (
    <AuthForm login text={authDictionary.signIn} onFinish={handleFinish}>
      <EmailField
        value={login.email}
        label={authDictionary.loginEmail}
        placeholder={authDictionary.loginPlaceholder}
      />

      <PasswordField
        name="password"
        value={login.password}
        label={authDictionary.password}
        placeholder={authDictionary.passwordPlaceholder}
      />
    </AuthForm>
  );
};
