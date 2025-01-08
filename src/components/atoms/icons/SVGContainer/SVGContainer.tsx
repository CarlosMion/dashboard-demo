import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface SVGContainerProps extends PropsWithChildren {
  width: string | number;
  height: string | number;
  fill?: string;
}

export default function SVGContainer({
  children,
  width,
  height,
  fill = "none",
}: SVGContainerProps) {
  return (
    <Box
      width={width}
      height={height}
      component="svg"
      fill={fill}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </Box>
  );
}
