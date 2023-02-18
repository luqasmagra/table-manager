import React, { useState, createElement } from "react";
import { useParams } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TableOutlined,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import styles from "./Layout.module.css";
import logo from "./logo.svg";
const { Header, Sider, Content } = Layout;
export default function LayoutPage({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const params = useParams();
  console.log(params);
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
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
              key: "1",
              icon: <UserOutlined />,
              label: "Perfil",
            },
            {
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
            padding: 1,
            background: "#1677ff",
          }}
        >
          <div className={styles.networkMainContainer}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `${styles.trigger}`,
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className={styles.networkContainer}>
              <a
                href="https://github.com/luqasmagra/tables-manager"
                target="_blank"
                className={styles.network}
              >
                <GithubFilled />
              </a>
              <a
                href="https://www.linkedin.com/in/luqasmagra/"
                target="_blank"
                className={styles.network}
              >
                <LinkedinFilled />
              </a>
            </div>
          </div>
        </Header>
        <Content
          className={styles.content}
          style={{
            padding: 20,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
