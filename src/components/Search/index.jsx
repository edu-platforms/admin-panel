import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import classnamesBind from "classnames/bind";
import styles from "./search.scss";

const cn = classnamesBind.bind(styles);

export const MainSearch = ({ ...props }) => {
  return (
    <Input
      // className={cn("search")}
      style={{ marginBottom: "20px" }}
      suffix={<SearchOutlined style={{ fontSize: "25px" }} />}
      {...props}
    />
  );
};
