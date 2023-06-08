import { Layout as AntdLayout } from "antd";
import classnamesBind from "classnames/bind";
import styles from "./content.module.scss";

const cn = classnamesBind.bind(styles);

export const Content = ({ children }) => (
  <AntdLayout.Content className={cn("content")}>{children}</AntdLayout.Content>
);
