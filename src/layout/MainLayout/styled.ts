"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";

export const MainContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  width: "100%",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
