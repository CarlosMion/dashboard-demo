"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import { DRAWER_WIDTH_DESKTOP } from "@/constants";

export const MainContainer = styled(Box)(({ theme }) => ({
  // backgroundColor: useMediaQuery(theme.breakpoints.down("md"))
  //   ? theme.palette.background.paper
  //   : theme.palette.background.default,
  backgroundColor: theme.palette.background.paper,
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingLeft: useMediaQuery(theme.breakpoints.down("md"))
    ? 0
    : DRAWER_WIDTH_DESKTOP,
}));

export const Row = styled(Stack)({
  flexDirection: "row",
  width: "100%",
});

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
  display: useMediaQuery(theme.breakpoints.down("md")) ? "none" : "flex",
  flexDirection: "column",
  alignItems: "center",
}));
