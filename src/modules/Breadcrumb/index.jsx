import { useSelector } from "react-redux";
import { breadcrumbSelector } from "@/store";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { generateBreadcrumbItems } from "../utils";
import { RightOutlined } from "@ant-design/icons";

export const Breadcrumb = () => {
  const { breadcrumbs } = useSelector(breadcrumbSelector);

  const items = generateBreadcrumbItems(breadcrumbs);

  return (
    <AntdBreadcrumb
      key="title"
      separator={<RightOutlined />}
      items={items}
    />
  );
};
