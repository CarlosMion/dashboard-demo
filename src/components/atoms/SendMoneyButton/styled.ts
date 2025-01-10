"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonContainer = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: `${theme.spacing(1.8)} ${theme.spacing(3)}`,
  backgroundColor: theme.palette.text.primary,
  borderRadius: "50px",
  textTransform: "none",
  color: theme.palette.common.white,
  fontWeight: 400,
  fontSize: "0.75rem",
}));

export const Content = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1.5),
  alignItems: "center",
  justifyContent: "center",
}));
