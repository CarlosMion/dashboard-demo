"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

export const FormButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  padding: `${theme.spacing(1.5)} ${theme.spacing(8)}`,
  width: useMediaQuery(theme.breakpoints.down("md")) ? "100%" : "auto",
  marginTop: theme.spacing(2),
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? "0.7rem" : "0.9rem",
  textTransform: "none",
}));

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const FullWidthButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  padding: `${theme.spacing(2)} 0`,
}));
