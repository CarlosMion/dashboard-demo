"use client";

import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid2";
import { CreditCardVariant } from "./types";

interface ContainerProps {
  variant: CreditCardVariant;
}

export const Container = styled(Grid)<ContainerProps>(({ theme, variant }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background:
    variant === "dark"
      ? theme.palette.background.blackCard
      : theme.palette.background.paper,
  borderRadius: "25px",
  paddingTop: theme.spacing(1),
  width: useMediaQuery(theme.breakpoints.down("md")) ? "250px" : "350px",
}));

export const GridContent = styled(Grid)(({ theme }) => ({
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(1.5)
    : theme.spacing(2),
}));
