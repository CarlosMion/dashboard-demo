"use client";

import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  height: "100%",
  gap: theme.spacing(2),
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const OptionsContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  overflowX: "auto",
  width: "100%",
  gap: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : theme.spacing(3.75),
  WebkitOverflowScrolling: "touch",
}));

export const FloatingButton = styled(IconButton)(({ theme }) => ({
  boxShadow: `4px 4px 18px -2px ${alpha(theme.palette.grey[600], 0.5)}`,
}));

export const Content = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  justifyContent: "start",
  alignItems: "start",
  gap: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "25px",
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
}));
