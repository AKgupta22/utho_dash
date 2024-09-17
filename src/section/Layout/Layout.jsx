import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import AsideBar from "../SideBar/AsideBar";
import HeaderBar from "../Header/HeaderBar";

const { Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AsideBar collapsed={collapsed} />
      <Layout>
        <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 18,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
