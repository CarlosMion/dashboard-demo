"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
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
  opacity: contrast === "dark" ? 0.7 : 1,
  textTransform: "uppercase",
}));

export const Value = styled(Typography)<TitleProps>(({ theme, contrast }) => ({
  color:
    contrast === "dark" ? theme.palette.common.white : theme.palette.text.title,
}));
