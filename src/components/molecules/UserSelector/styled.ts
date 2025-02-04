"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const Container = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
});

export const Title = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(1.2),
  color: theme.palette.text.primary,
  fontWeight: 400,
  textAlign: "center",
  whiteSpace: "nowrap",
  lineClamp: 1,
}));

export const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 0.8,
  textAlign: "center",
}));
