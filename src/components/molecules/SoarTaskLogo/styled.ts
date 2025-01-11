"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ArrowBack from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.25),
  flexDirection: "row",
  justifyContent: "start",
  maxWidth: "18.3rem",
  minWidth: "18.3rem",
  alignItems: "center",
  width: "100%",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2)} ${theme.spacing(1.5)} ${theme.spacing(1)}`
    : `${theme.spacing(4.5)} ${theme.spacing(5.5)} ${theme.spacing(3)}`,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  letterSpacing: 0,
  color: theme.palette.text.title,
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? 18 : 25,
  textAlign: "center",
}));

export const MobileOnlyButton = styled(IconButton)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("md")) ? "flex" : "none",
}));

export const SmallArrowBack = styled(ArrowBack)(({ theme }) => ({
  width: 18,
  height: 18,
  fill: theme.palette.text.title,
}));
