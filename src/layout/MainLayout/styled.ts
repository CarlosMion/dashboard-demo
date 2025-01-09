"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

export const MainContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  width: "100%",
  padding: "0px !important",
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
