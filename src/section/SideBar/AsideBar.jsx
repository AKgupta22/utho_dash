import {
  DashboardOutlined,
  ProductOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./styles.css";
import { logoUrl } from "../../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const { Sider } = Layout;

const AsideBar = ({ collapsed, setCollapsed, setShowCollapedBtn }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentSelectedKey = useMemo(() => {
    const splitsPath = pathname.split("/");
    const currentPath = splitsPath[splitsPath.length - 1];
    return currentPath;
  }, [pathname]);

  const handleNavigation = ({ key }) => {
    navigate(key ? key : "/dashboard/");
  };

  return (
    <Sider
      breakpoint="sm"
      onBreakpoint={(broken) => {
        if (broken) {
          setShowCollapedBtn(false);
          setCollapsed(true);
        } else setShowCollapedBtn(true);
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo-container">
        <img src={logoUrl} alt="logo" className="logo-container_logo" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[""]}
        selectedKeys={[currentSelectedKey]}
        onSelect={handleNavigation}
        items={[
          {
            key: "",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "services",
            icon: <ProductOutlined />,
            label: "Services",
          },
          {
            key: "users",
            icon: <UserOutlined />,
            label: "Users",
          },
          {
            key: "settings",
            icon: <SettingOutlined />,
            label: "Settings",
          },
        ]}
        style={{ minHeight: "100vh" }}
      />
    </Sider>
  );
};

export default AsideBar;
