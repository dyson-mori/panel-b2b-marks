"use client"

import React from 'react'

import { TrendingDown, TrendingUp } from 'lucide-react';
// import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Container } from './styles';

import Pie from './pie';
import Area from './area';

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
];

export const Graph: React.FC<{ graph: { pie: any[] } }> = ({ graph }) => {
  return (
    <Container>
      <Pie data={graph.pie} />
      <Area />
    </Container>
  );
};
