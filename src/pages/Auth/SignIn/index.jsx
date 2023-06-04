import { useDispatch } from "react-redux";
import { AuthForm } from "../Form";
import { EmailField, PasswordField } from "../Fields";
import { signIn } from "@/store";
import { authDictionary } from "../dictionary";

export const SignIn = () => {
  const dispatch = useDispatch();
  const login = { email: "mansurov.jr@mail.ru", password: "Nozim0302" };

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
