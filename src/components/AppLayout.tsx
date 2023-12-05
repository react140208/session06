import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Button, Layout, Menu, Space, theme } from "antd";
import SelectColor from "./SelectColor";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { reset } from "../pages/Counter/Counter.slice";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Task", "/task", <PieChartOutlined />),
  getItem("Task Zustand", "/taskz", <PieChartOutlined />),
  getItem("Todo", "/todo", <DesktopOutlined />),
  getItem("Photo", "/photo", <UserOutlined />),
  getItem("Post", "/post", <UserOutlined />),
  getItem("Counter", "/counter", <UserOutlined />),
  getItem("Counter Zustand", "/counter-zustand", <UserOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const counter = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const naigation = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(e) => naigation(e.key)}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Space>
            <SelectColor></SelectColor>
            <Badge count={counter} />
            <Button onClick={() => dispatch(reset())}>Reset</Button>
          </Space>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>React 1402</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
