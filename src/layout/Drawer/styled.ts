"use client";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { DRAWER_WIDTH_DESKTOP, DRAWER_WIDTH_MOBILE } from "@/constants";
import useMediaQuery from "@mui/material/useMediaQuery";

export const StyledDrawer = styled(Drawer)(({ theme }) => {
  return {
    padding: `${theme.spacing(4)} 0`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    minWidth: useMediaQuery(theme.breakpoints.down("md"))
      ? DRAWER_WIDTH_MOBILE
      : DRAWER_WIDTH_DESKTOP,
    maxWidth: useMediaQuery(theme.breakpoints.down("md"))
      ? DRAWER_WIDTH_MOBILE
      : DRAWER_WIDTH_DESKTOP,
  };
});

export const ContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
});
