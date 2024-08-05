import React, { PureComponent } from "react";
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

const data = [
  {
    name: "2",
    uv: 4000,
    Visits: 500,
    amt: 2400,
  },
  {
    name: "4",
    uv: 3000,
    Visits: 800,
    amt: 2210,
  },
  {
    name: "6",
    uv: 2000,
    Visits: 550,
    amt: 2290,
  },
  {
    name: "8",
    uv: 2780,
    Visits: 500,
    amt: 2000,
  },
  {
    name: "10",
    uv: 1890,
    Visits: 1000,
    amt: 2181,
  },
  {
    name: "12",
    uv: 2390,
    Visits: 880,
    amt: 2500,
  },
  {
    name: "14",
    uv: 3490,
    Visits: 550,
    amt: 2100,
  },
  {
    name: "16",
    uv: 3490,
    Visits: 800,
    amt: 2100,
  },
  {
    name: "18",
    uv: 3490,
    Visits: 880,
    amt: 2100,
  },
  {
    name: "20",
    uv: 3490,
    Visits: 400,
    amt: 2100,
  },
  {
    name: "22",
    uv: 3490,
    Visits: 500,
    amt: 2100,
  },
  {
    name: "24",
    uv: 3490,
    Visits: 700,
    amt: 2100,
  },
  {
    name: "26",
    uv: 3490,
    Visits: 1000,
    amt: 2100,
  },
  {
    name: "28",
    uv: 3490,
    Visits: 700,
    amt: 2100,
  },
];

export default class BarChartOne extends PureComponent {
  render() {
    return (
      <ResponsiveContainer
        className="responsive-container"
        // width={"100%"}
        // height={"100%"}
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 15,
            bottom: 25,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            stroke="#ddfae2"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis stroke="#ddfae2" />
          <Tooltip />

          <Bar dataKey="Visits" fill="#1bd43f" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
