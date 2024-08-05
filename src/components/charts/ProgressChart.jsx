import React from "react";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

const ProgressChart = () => {
  const data = [{ name: "L1", value: 70 }];

  const circleSize = 30;
  return (
    <div>
      <RadialBarChart
        width={circleSize}
        height={circleSize}
        cx={circleSize / 2}
        cy={circleSize / 2}
        innerRadius={15}
        outerRadius={20}
        barSize={2}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          clockWise
          dataKey="value"
          cornerRadius={circleSize / 2}
          fill="#82ca9d"
        />
        <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          70 %
        </text>
      </RadialBarChart>
    </div>
  );
};

export default ProgressChart;
