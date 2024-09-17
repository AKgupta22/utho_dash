import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import AsideBar from "../SideBar/AsideBar";
import HeaderBar from "../Header/HeaderBar";

const { Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showCollapedBtn, setShowCollapedBtn] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AsideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setShowCollapedBtn={setShowCollapedBtn}
      />
      <Layout>
        <HeaderBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          showCollapedBtn={showCollapedBtn}
        />
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
