import { Flex, Typography } from "antd";
import "./styles.css";

const ChartHeaderWrapper = ({ title, children }) => {
  return (
    <Flex className="chart-header-container" vertical align="center">
      <Typography.Title level={3}>{title}</Typography.Title>
      {children}
    </Flex>
  );
};

export default ChartHeaderWrapper;
