"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2)} ${theme.spacing(2.5)}`
    : `${theme.spacing(2.5)} ${theme.spacing(3)}`,
}));
