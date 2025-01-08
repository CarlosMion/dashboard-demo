"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import breakpoints from "./config/breakpoints";
import typography from "./config/typography";
import palette from "./config/palette";

const themeOptions: ThemeOptions = {
  typography,
  palette,
  breakpoints,
};

const theme = createTheme({
  cssVariables: true,
  ...themeOptions,
});

export default theme;
