"use client";

import { PropsWithChildren, useMemo } from "react";
import { Box, Theme, useMediaQuery } from "@mui/material";

interface SVGContainerProps extends PropsWithChildren {
  width?: number;
  height?: number;
  fill?: string | null;
  role?: string;
  ariaBusy?: boolean;
}

export default function SVGContainer({
  children,
  width = 24,
  height = 24,
  fill = "none",
  role = "img",
  ariaBusy = false,
}: SVGContainerProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const displayWidth = useMemo(
    () => (isMobile ? (3 * width) / 4 : width),
    [isMobile, width]
  );
  const displayHeight = useMemo(
    () => (isMobile ? (3 * height) / 4 : height),
    [isMobile, height]
  );
  return (
    <Box
      sx={{
        width: displayWidth,
        height: displayHeight,
      }}
      component="svg"
      fill={fill || undefined}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      aria-busy={ariaBusy}
      aria-hidden={true}
    >
      {children}
    </Box>
  );
}
