import { useState } from "react";
import { Layout as AntdLayout } from "antd";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { Content } from "./Content";
import { Outlet } from "react-router-dom";
import { logo } from "@/assets";
import { constantsDictionary } from "@/constants";
import classnamesBind from "classnames/bind";
import styles from "./layout.module.scss";

const cn = classnamesBind.bind(styles);

export const Layout = () => {
  const [value, setValue] = useState(false);
  const sideWidth = value ? 80 : 250;

  const toggle = () => setValue(!value);

  return (
    <AntdLayout className={cn("layout")} hasSider>
      <AntdLayout.Sider
        trigger={null}
        collapsible
        collapsed={value}
        width={sideWidth}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className={cn("layout__logo")}>
          <img src={logo} alt="Logo" />
          {!value && <span className={cn("layout__logo-text")}>{constantsDictionary.siteTitle}</span>}
        </div>

        <div className="layout__menu">
          <Menu />
        </div>
      </AntdLayout.Sider>

      <AntdLayout style={{ marginLeft: sideWidth }}>
        <Header collapsed={value} onCollapsedClick={toggle} />

        <Content>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
