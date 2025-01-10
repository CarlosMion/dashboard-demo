import React, { useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Container } from "./styled";
import { ExpenseStatistic } from "@/types";
import { useTheme } from "@mui/material";
import PieChartLabel from "@/components/atoms/PieChartLabel";
import { PieChartLabelProps } from "@/components/atoms/PieChartLabel/PieChartLabel";

interface SimplePieChartProps {
  data: ExpenseStatistic[];
}

const SimplePieChart = ({ data }: SimplePieChartProps) => {
  const theme = useTheme();

  const COLORS = [
    theme.palette.common.orange,
    theme.palette.text.title,
    theme.palette.primary.main,
    theme.palette.text.primary,
  ];

  const renderCustomizedLabel = useCallback((props: PieChartLabelProps) => {
    return <PieChartLabel {...props} />;
  }, []);

  return (
    <Container>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          paddingAngle={2}
          strokeWidth={6}
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Container>
  );
};

export default SimplePieChart;
