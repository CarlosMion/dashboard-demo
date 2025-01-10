"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ContainerProps {
  mode: "all" | "limited";
}

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.whiteTransparency,
  borderRadius: "0 0 25px 25px",
  gap: theme.spacing(2),
}));

export const Header = styled(Stack)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const CardRow = styled(Stack)<ContainerProps>(({ theme, mode }) => ({
  display: "flex",
  flexDirection: mode === "all" ? "column" : "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  gap: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : theme.spacing(3.75),
  WebkitOverflowScrolling: "touch",
}));
