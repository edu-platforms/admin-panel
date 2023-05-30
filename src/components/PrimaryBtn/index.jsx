import { Button } from "antd";
import classnames from "classnames";
import classnameBind from "classnames/bind";
import styles from "./primary-btn.scss";

const cn = classnameBind.bind(styles);

export const PrimaryBtn = ({ btn, children, className, ...props }) => {
  return (
    <Button
      type="primary"
      htmlType={btn ? "button" : "submit"}
      className={classnames(cn("primary-btn"), className)}
      {...props}
    >
      {children}
    </Button>
  );
};
