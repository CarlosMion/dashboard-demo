"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CreditCardVariant } from "../Card/types";

interface TitleProps {
  contrast: CreditCardVariant;
}

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.background.whiteTransparency,
  borderRadius: "0 0 25px 25px",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2)} ${theme.spacing(2.5)}`
    : `${theme.spacing(2.5)} ${theme.spacing(3)}`,
}));

export const Value = styled(Typography)<TitleProps>(({ theme, contrast }) => ({
  color:
    contrast === "dark" ? theme.palette.common.white : theme.palette.text.title,
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? "1rem" : "1.5rem",
  lineHeight: useMediaQuery(theme.breakpoints.down("md")) ? "18px" : "30px",
  fontWeight: 500,
}));
