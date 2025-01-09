"use client";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconButton, useMediaQuery } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${theme.spacing(2.5)} ${theme.spacing(5)}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const Actions = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
});

export const DesktopOnlyActions = styled(Stack)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "none" : "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 28,
}));

export const ActionButton = styled(IconButton)(({ theme }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const DesktopOnlyMenu = styled(IconButton)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "flex" : "none",
}));
