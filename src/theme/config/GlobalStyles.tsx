"use client";

import { isEdge } from "@/utils";
import { CSSObject, GlobalStyles as GlobalThemeStyles } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useMemo } from "react";

export default function GlobalStyles({
  userAgent,
}: {
  userAgent: string | null;
}) {
  const theme = useTheme();

  const scrollbarStyles = useMemo<CSSObject>(
    () =>
      isEdge(userAgent)
        ? {
            "html::-webkit-scrollbar": {
              width: 10,
              background: `linear-gradient(${theme.palette.background.default}, ${theme.palette.common.white})`,
            },
            "html::-webkit-scrollbar-thumb": {
              borderRadius: "50px",
              backgroundColor: alpha(theme.palette.secondary.main, 0.5),
            },
          }
        : {},
    [userAgent, theme]
  );

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
          overflowX: "hidden",
          overflowY: "scroll",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        a: {
          textDecoration: "none",
        },
        ...scrollbarStyles,
      }}
    />
  );
}
