import { Avatar, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const MenuDropDown = ({ setOpenModal }) => {
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => setOpenModal(true)}
        key="1"
        icon={<ProfileOutlined />}
      >
        View Profile
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<LogoutOutlined />}
        onClick={() => alert("Your are logged out")}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar size="large" icon={<UserOutlined />} />
      </a>
    </Dropdown>
  );
};

export default MenuDropDown;
