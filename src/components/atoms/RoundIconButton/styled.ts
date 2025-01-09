"use client";

import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const Container = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.background.default,
  transition: "background-color 0.3s, transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.1)",
  },
  "&:active": {
    backgroundColor: theme.palette.action.selected,
    transform: "scale(0.95)",
  },
}));
