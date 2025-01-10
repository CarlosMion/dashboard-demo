import { useMemo } from "react";
import { useTheme } from "@mui/material";

export interface PieChartLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}

export default function PieChartLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: PieChartLabelProps) {
  const theme = useTheme();
  const RADIAN = useMemo(() => Math.PI / 180, []);

  const radius = useMemo(
    () => innerRadius + (outerRadius - innerRadius) * 0.6,
    [innerRadius, outerRadius]
  );

  const [x, y] = useMemo(() => {
    const xPos = cx + radius * Math.cos(-midAngle * RADIAN);
    const yPos = cy + radius * Math.sin(-midAngle * RADIAN);
    return [xPos, yPos];
  }, [cx, radius, midAngle, RADIAN, cy]);

  return (
    <text
      x={x}
      y={y}
      fill={theme.palette.common.white}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="smaller"
    >
      {`${(percent * 100).toFixed(0)}%`}
      <tspan x={x} dy="1.2em">
        {name}
      </tspan>
    </text>
  );
}
