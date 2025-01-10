"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CreditCardVariant } from "../Card/types";

interface TitleProps {
  contrast: CreditCardVariant;
}

export const Container = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

export const Title = styled(Typography)<TitleProps>(({ theme, contrast }) => ({
  color:
    contrast === "dark"
      ? theme.palette.common.white
      : theme.palette.text.secondary,
}));

export const Value = styled(Typography)<TitleProps>(({ theme, contrast }) => ({
  color:
    contrast === "dark" ? theme.palette.common.white : theme.palette.text.title,
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? "1rem" : "1.5rem",
  fontWeight: 500,
}));
