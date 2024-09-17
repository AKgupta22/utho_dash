import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { capitalize } from "../../utils/constant";

const SimpleBarChart = ({ config }) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={600}
        height={400}
        data={config?.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={config?.xDataKey} />
        <YAxis />
        <Tooltip formatter={(value, name) => [value, capitalize(name)]} />
        <Legend formatter={(value) => capitalize(value)} />
        {config?.barData?.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            stackId={bar.stackId}
            fill={bar.color}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
