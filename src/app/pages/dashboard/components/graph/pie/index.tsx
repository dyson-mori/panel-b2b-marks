"use client"

import React, { useMemo } from "react"
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts'

import { StyledCard, ChartContainer } from "./styles"

// Chart data
// const data = [
//   { name: 'Chrome', value: 100, color: '#0088FE' },
//   { name: 'Firefox', value: 300, color: '#00C49F' },
//   { name: 'Safari', value: 300, color: '#FFBB28' },
//   { name: 'Edge', value: 200, color: '#FF8042' },
// ];

interface DonutChartProps {
  data: {
    title: string;
    quantity: number;
    color: string;
  }[];
};

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const totalValue = useMemo(() => data.reduce((sum, entry) => sum + entry.quantity, 0), [])

  return (
    <StyledCard>
      {/* <CardHeader>
        <CardTitle>Browser Usage</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="quantity"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox;
                  return (
                    <text x={cx} y={cy} fill="#333" textAnchor="middle" dominantBaseline="central">
                      <tspan x={cx} y={cy} dy="-0.5em" fontSize="24" fontWeight="bold">
                        {totalValue}
                      </tspan>
                      <tspan x={cx} y={cy} dy="1.5em" fontSize="14">
                        Total
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      {/* <CardFooter>
        Showing browser usage data for the last 6 months
      </CardFooter> */}
    </StyledCard>
  )
}

export default DonutChart