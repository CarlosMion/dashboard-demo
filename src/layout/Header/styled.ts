"use client";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2)} ${theme.spacing(3)}`
    : `${theme.spacing(2.5)} ${theme.spacing(5)}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}));

export const MainContentContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: theme.spacing(1),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const Actions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
}));

export const DesktopOnlyActions = styled(Stack)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "none" : "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 28,
}));

export const MobileOnly = styled(Stack)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "flex" : "none",
  width: "100%",
  padding: `${theme.spacing(1)} 0`,
}));

export const MobileOnlyButton = styled(IconButton)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "flex" : "none",
}));

export const ActionButton = styled(IconButton)(({ theme }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const SmallMenuIcon = styled(MenuIcon)(({ theme }) => ({
  width: 22,
  height: 22,
  fill: theme.palette.text.title,
}));
