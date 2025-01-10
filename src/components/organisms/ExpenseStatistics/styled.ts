"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

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

export const Content = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: "350px",
  justifyContent: "center",
  alignItems: "center",
  overflowX: "auto",
  gap: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "25px",
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
}));
