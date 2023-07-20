import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
    {
        name: 'Sun',
        books: 4000,
        clothes: 2400,
        electronic: 2400
    },
    {
        name: 'Mon',
        books: 3000,
        clothes: 2400,
        electronic: 2400
    },
    {
        name: 'Tue',
        books: 2000,
        clothes: 1400,
        electronic: 3400
    },
    {
        name: 'Wed',
        books: 6540,
        clothes: 3400,
        electronic: 1200
    },
    {
        name: 'Thur',
        books: 2330,
        clothes: 1122,
        electronic: 4532
    },
    {
        name: 'Fri',
        books: 4566,
        clothes: 1209,
        electronic: 4598
    },
    {
        name: 'Sat',
        books: 2398,
        clothes: 3421,
        electronic: 6593
    }
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
