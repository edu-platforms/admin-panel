import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Menu as AntdMenu } from "antd";
import { history } from "@/utils";
import { mainMenuList } from "@/constants";
import { generateAllMenuItems } from "@/modules/utils";

export const Menu = () => {
  const { pathname } = useLocation();
  const mainMenuItems = generateAllMenuItems(mainMenuList);

  const handleClick = ({ key, domEvent }) => {
    domEvent.preventDefault();
    domEvent.stopPropagation();
    history.push(key);
  };

  const selectedMenuOpenKeyList = useMemo(
    () => pathname.split("/"),
    [pathname]
  );

  const selectedMenuOpenKey = useMemo(
    () =>
      selectedMenuOpenKeyList.length ? `/${selectedMenuOpenKeyList[1]}` : "",
    [selectedMenuOpenKeyList]
  );

  return (
    <AntdMenu
      theme="dark"
      mode="inline"
      items={mainMenuItems}
      selectedKeys={[selectedMenuOpenKey]}
      defaultOpenKeys={[selectedMenuOpenKey]}
      defaultSelectedKeys={[pathname]}
      onClick={handleClick}
    />
  );
};
