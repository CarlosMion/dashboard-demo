import { WeeklyActivity } from "@/types";
import React, { useMemo } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { Container } from "./styled";
import { useTheme } from "@mui/material";

interface WeeklyTransactionsChartProps {
  data: WeeklyActivity[];
}

export default function WeeklyTransactionsBarChart({
  data,
}: WeeklyTransactionsChartProps) {
  const theme = useTheme();

  const barRadius = useMemo<[number, number, number, number]>(
    () => [15, 15, 15, 15],
    []
  );

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
          barGap={5}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(value) => [`$${value}`, ``]}
            labelStyle={{ color: theme.palette.text.secondary }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "20px",
            }}
            iconType="circle"
            iconSize={12}
          />
          <Bar
            dataKey="withdraw"
            fill={theme.palette.text.primary}
            name="Withdrawals"
            radius={barRadius}
          />
          <Bar
            dataKey="deposit"
            fill={theme.palette.primary.main}
            name="Deposits"
            radius={barRadius}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
