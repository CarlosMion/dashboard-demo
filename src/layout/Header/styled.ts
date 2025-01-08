"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${theme.spacing(2.5)} ${theme.spacing(5)}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}));
