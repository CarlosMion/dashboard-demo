import { BalanceHistory } from "@/types";
import React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container } from "./styled";
import { useTheme } from "@mui/material";
import { useTranslations } from "next-intl";

interface AreaChartProps {
  data: BalanceHistory[];
}

export default function AreaChart({ data }: AreaChartProps) {
  const theme = useTheme();
  const t = useTranslations("card");
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={true}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="date" axisLine={false} tickLine={true} />
          <YAxis
            axisLine={false}
            tickLine={true}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, t("balance")]}
            labelStyle={{ color: theme.palette.text.secondary }}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke={theme.palette.common.blue}
            fill="url(#colorGradient)"
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.common.blue}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={theme.palette.common.blue}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
