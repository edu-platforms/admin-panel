import { useSelector } from "react-redux";
import { breadcrumbSelector } from "@/store";
import { Breadcrumb as BreadcrumbAntd } from "antd";
import { generateBreadcrumbItems } from "../utils";
import { RightOutlined } from "@ant-design/icons";
import classnamesBind from "classnames/bind";
import styles from "./breadcrumb.module.scss";

const cn = classnamesBind.bind(styles);

export const Breadcrumb = () => {
  const { breadcrumbs } = useSelector(breadcrumbSelector);

  const items = generateBreadcrumbItems(breadcrumbs);

  return (
    <BreadcrumbAntd
      key="title"
      className={cn("breadcrumb")}
      separator={<RightOutlined />}
      items={items}
    />
  );
};
