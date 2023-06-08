import { Form, Row, Typography } from "antd";
import { PrimaryBtn } from "@/components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import { useSelector } from "react-redux";
import { authSelector } from "@/store";
import { authDictionary } from "../dictionary";
import classnameBind from "classnames/bind";
import styles from "../auth.module.scss";

const cn = classnameBind.bind(styles);

export const AuthForm = ({ text, loader, login, onFinish, children }) => {
  const { loading } = useSelector(authSelector);

  return (
    <Form
      className={cn("auth__form")}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      {children}

      <PrimaryBtn
        type="primary"
        loading={loading[loader]}
        block
        htmlType="submit"
        className={cn("auth__form-btn")}
      >
        {text}
      </PrimaryBtn>

      <Row align="center">
        {login ? (
          <Typography.Text>
            {authDictionary.forget}&nbsp;
            <Link to={ROUTES.email} component={Typography.Link}>
              {authDictionary.recovery}
            </Link>
          </Typography.Text>
        ) : (
          <Typography.Text>
            <Link to={ROUTES.signIn} component={Typography.Link}>
              {authDictionary.backToLoginPage}
            </Link>
          </Typography.Text>
        )}
      </Row>
    </Form>
  );
};
