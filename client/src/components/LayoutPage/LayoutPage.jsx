import React, { useState, createElement, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TableOutlined,
  GithubFilled,
} from "@ant-design/icons";
import styles from "./Layout.module.css";
import logo from "./logo.svg";

const { Header, Sider, Content } = Layout;

export default function LayoutPage({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout className={styles.layout}>
      <Sider
        style={{
          background: "#1a2027",
        }}
        trigger={
          <div className={styles.networkContainer}>
            <a
              href="https://github.com/luqasmagra/tables-manager"
              target="_blank"
              className={styles.network}
            >
              <GithubFilled />
            </a>
          </div>
        }
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
      <Layout>
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
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
}
