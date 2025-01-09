"use client";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DRAWER_WIDTH } from "@/constants";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
  display: useMediaQuery(theme.breakpoints.down("md")) ? "none" : "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  minWidth: DRAWER_WIDTH,
  maxWidth: DRAWER_WIDTH,
}));

export const ContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
});
