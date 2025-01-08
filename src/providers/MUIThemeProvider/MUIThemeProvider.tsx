"use client";

import theme from "@/theme";
import GlobalStyles from "@/theme/config/GlobalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";

interface MUIThemeProviderProps extends PropsWithChildren {
  userAgent: string | null;
}

export default function MUIThemeProvider({
  userAgent,
  children,
}: MUIThemeProviderProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles userAgent={userAgent} />
      {children}
    </ThemeProvider>
  );
}
