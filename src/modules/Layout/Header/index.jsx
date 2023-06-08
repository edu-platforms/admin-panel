import { Button, Col, Layout as AntdLayout, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb } from "@/modules/Breadcrumb";
import { Account } from "../Account";
import classnamesBind from "classnames/bind";
import styles from "./header.module.scss";

const cn = classnamesBind.bind(styles);

export const Header = ({ collapsed, onCollapsedClick }) => (
  <AntdLayout.Header className={cn("header")}>
    <Row align="middle">
      <Col span={1}>
        <Button type="button" onClick={onCollapsedClick}>
          {collapsed ? (
            <MenuUnfoldOutlined className={cn("header__icon")} />
          ) : (
            <MenuFoldOutlined className={cn("header__icon")} />
          )}
        </Button>
      </Col>

      <Col span={10}>
        <Breadcrumb />
      </Col>

      <Col span={6} offset={7}>
        <Account />
      </Col>
    </Row>
  </AntdLayout.Header>
);
