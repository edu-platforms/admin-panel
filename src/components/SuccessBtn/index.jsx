import { Button } from "antd";
import classnames from "classnames";
import classnameBind from "classnames/bind";
import styles from "./success-btn.scss";

const cn = classnameBind.bind(styles);

export const SuccessBtn = ({ submit, className, children, ...props }) => {
  return (
    <Button
      size="large"
      type="primary"
      htmlType={submit ? "submit" : "button"}
      className={classnames(cn("success-btn"), className)}
      {...props}
    >
      {children}
    </Button>
  );
};
