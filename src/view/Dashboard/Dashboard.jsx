import { Flex, Skeleton } from "antd";
import { lazy, Suspense } from "react";
import ChartHeaderWrapper from "../../components/Charts/ChartHeaderWrapper";
const SimpleLineChart = lazy(() =>
  import("../../components/Charts/SimpleLineChart")
);
const SimpleBarChart = lazy(() =>
  import("../../components/Charts/SimpleBarChart")
);
import { sericeGrowthConfig, userGrowthConfig } from "../../utils/constant";

const Dashboard = () => {
  return (
    <Flex align="center" gap="2rem">
      <ChartHeaderWrapper title="Hosting services growth by month">
        <Suspense fallback={<Skeleton active />}>
          <SimpleBarChart config={sericeGrowthConfig} />
        </Suspense>
      </ChartHeaderWrapper>
      <ChartHeaderWrapper title="Users growth by month">
        <Suspense fallback={<Skeleton active />}>
          <SimpleLineChart config={userGrowthConfig} />
        </Suspense>
      </ChartHeaderWrapper>
    </Flex>
  );
};

export default Dashboard;
