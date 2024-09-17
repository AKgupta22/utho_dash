import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Modal, theme } from "antd";
import MenuDropDown from "./components/MenuDropDown";
import { useState } from "react";
import ViewProfile from "../../view/Profile/ViewProfile";
const { Header } = Layout;

const HeaderBar = ({ collapsed, setCollapsed, showCollapedBtn }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          style={{ paddingRight: "1rem" }}
        >
          {showCollapedBtn ? (
            <Button
              type="text"
              icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          ) : (
            <span />
          )}

          <MenuDropDown setOpenModal={setOpenModal} />
        </Flex>
      </Header>
      {openModal ? (
        <Modal
          title="View Profile"
          centered
          open={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          width={800}
        >
          <ViewProfile />
        </Modal>
      ) : null}
    </>
  );
};

export default HeaderBar;
