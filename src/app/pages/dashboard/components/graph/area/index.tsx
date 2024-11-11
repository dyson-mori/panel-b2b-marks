"use client"

import React from 'react'

import { TrendingDown, TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Container, CardHeader, CardTitle, CardDescription, CardContent } from './styles';

// Define the ChartConfig type
// type ChartConfig = {
//   [key: string]: {
//     label: string
//     color: string
//     icon: React.ComponentType
//   }
// }

const chartData = [
  { month: "January", '2022': 186, '2023': 80, '2024': 25 },
  { month: "February", '2022': 305, '2023': 200, '2024': 200 },
  { month: "March", '2022': 237, '2023': 120, '2024': 100 },
  { month: "April", '2022': 73, '2023': 190, '2024': 350 },
  { month: "May", '2022': 209, '2023': 130, '2024': 220 },
  { month: "June", '2022': 214, '2023': 140, '2024': 120 },
];

const chartConfig = [
  {
    label: "2022",
    color: "hsl(152, 45%, 50%)",
    icon: TrendingDown,
  },
  {
    label: "2023",
    color: "hsl(186, 45%, 50%)",
    icon: TrendingUp,
  },
  {
    label: "2024",
    color: "#555",
    icon: TrendingDown,
  },
]

export default () => {
  return (
    <Container>
      {/* <CardHeader>
        <CardTitle>Monthly sales summary</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader> */}
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc' }}>
                      <p>{`${label}`}</p>
                      {payload.map((entry, index) => (
                        <p key={`item-${index}`} style={{ color: entry.color }}>
                          {`${entry.name}: ${entry.value}`}
                        </p>
                      ))}
                    </div>
                  )
                }
                return null
              }}
            />
            {chartConfig.map((row, index) => (
              <Area
                key={index}
                dataKey={row.label}
                type="natural"
                fill={chartConfig[index].color}
                fillOpacity={0.4}
                stroke={chartConfig[index].color}
                stackId={row.label}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
        {/* <ChartLegendWrapper>
          {Object.entries(chartConfig).map(([key, config]) => (
            <LegendItem key={key}>
              <LegendColor color={config.color} />
              <span>{config.label}</span>
            </LegendItem>
          ))}
        </ChartLegendWrapper> */}
      </CardContent>
      {/* <CardFooter>
        <FooterContent>
          <FooterInfo>
            <TrendingInfo>
              Trending up by 5.2% this month <TrendingUp size={16} />
            </TrendingInfo>
            <DateInfo>
              January - June 2024
            </DateInfo>
          </FooterInfo>
        </FooterContent>
      </CardFooter> */}
    </Container>
  );
};

// export const Graph: React.FC = () => {
//   return (
//     <Container>
//       <Pie />
//     </Container>
//   );
// };