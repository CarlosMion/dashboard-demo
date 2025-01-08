"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.25),
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(1)}`
    : `${theme.spacing(4.5)} ${theme.spacing(5.5)} ${theme.spacing(3)}`,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  letterSpacing: 0,
  color: theme.palette.text.title,
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? 18 : 25,
  textAlign: "center",
}));
