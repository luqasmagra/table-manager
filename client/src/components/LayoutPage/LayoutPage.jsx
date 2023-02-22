import React, { useState, createElement } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TableOutlined,
  GithubFilled,
} from "@ant-design/icons";
import logo from "./logo.svg";
import styles from "./Layout.module.css";

const { Header, Sider, Content } = Layout;

export default function LayoutPage({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  return (
    <Layout className={styles.layout}>
      <Sider
        style={{
          background: "#1a2027",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <Menu
          className={styles.menu}
          style={{
            background: "#1a2027",
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={[
            {
              onClick: () => {
                return navigate("/perfil");
              },
              key: "1",
              icon: <UserOutlined />,
              label: "Perfil",
            },
            {
              onClick: () => {
                return navigate("/");
              },
              key: "2",
              icon: <TableOutlined />,
              label: "Mesas",
            },
          ]}
        />
      </Sider>
      <Layout className={styles.content1}>
        <Header
          style={{
            padding: 2,
            background: "#1677ff",
          }}
        >
          <div className={styles.header}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `${styles.trigger}`,
              onClick: () => setCollapsed(!collapsed),
            })}
            <a
              href="https://github.com/luqasmagra/tables-manager"
              target="_blank"
              className={styles.network}
            >
              <GithubFilled />
            </a>
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
}
