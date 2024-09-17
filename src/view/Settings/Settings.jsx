import { Flex, Typography } from "antd";
import SettingUpdateForm from "./components/SettingUpdateForm";

const Settings = () => {
  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={4}>Settings</Typography.Title>
      </Flex>
      <SettingUpdateForm />
    </div>
  );
};

export default Settings;
