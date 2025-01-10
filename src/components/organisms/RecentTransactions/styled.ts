"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  gap: theme.spacing(2),
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const TransactionsContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflowX: "auto",
  borderRadius: "25px",
  overflowY: "hidden",
  gap: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : theme.spacing(3.75),
  WebkitOverflowScrolling: "touch",
  padding: theme.spacing(2),
}));
