import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import classnamesBind from "classnames/bind";
import styles from "./search.module.scss";

const cn = classnamesBind.bind(styles);

export const MainSearch = ({ ...props }) => {
  return (
    <Input
      className={cn("search")}
      placeholder="Search"
      suffix={<SearchOutlined className={cn("search__icon")} />}
      {...props}
    />
  );
};
