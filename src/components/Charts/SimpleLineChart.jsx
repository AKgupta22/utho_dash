import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { capitalize } from "../../utils/constant";

const SimpleLineChart = ({ config }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
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
        {config?.lineData?.map((line) => (
          <Line
            key={line.dataKey}
            dataKey={line.dataKey}
            activeDot={line?.activeDot ? line.activeDot : {}}
            stroke={line.color}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
