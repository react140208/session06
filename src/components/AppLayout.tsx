import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SelectColor from "./SelectColor";
import PhotoIndex from "../pages/Photo/PhotoIndex";
import PostIndex from "../pages/Post/PostIndex";
import TodoIndex from "../pages/Todo/TodoIndex";
import TaskList from "./TaskList/TaskList";
import { Outlet, useNavigate } from "react-router-dom";

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
  getItem("Todo", "/todo", <DesktopOutlined />),
  getItem("Photo", "/photo", <UserOutlined />),
  getItem("Post", "/post", <UserOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [toggle, setToggle] = useState(true);

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
          <SelectColor></SelectColor>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {/* <TaskList></TaskList>
          <TodoIndex></TodoIndex>
          <PhotoIndex></PhotoIndex>
          <button onClick={() => setToggle(!toggle)}>toggle</button>
          {toggle && <PostIndex></PostIndex>}

          <h1>Task List</h1> */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
