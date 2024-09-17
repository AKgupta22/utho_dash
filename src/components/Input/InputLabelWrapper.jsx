import { Flex, Typography } from "antd";

const InputLabelWrapper = ({ label, children }) => {
  return (
    <Flex vertical gap={"12px"}>
      <Typography.Text style={{ fontWeight: "600" }}>{label}</Typography.Text>
      {children}
    </Flex>
  );
};

export default InputLabelWrapper;
