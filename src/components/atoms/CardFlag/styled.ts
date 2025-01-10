"use client";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { CreditCardVariant } from "@/components/molecules/Card/types";

interface TitleProps {
  contrast: CreditCardVariant;
}

export const Container = styled(Stack)({
  display: "flex",
  position: "relative",
  width: "50px",
  height: "30px",
});

export const Circle = styled(Box)<TitleProps>(({ theme, contrast }) => ({
  position: "absolute",
  background:
    contrast === "dark" ? theme.palette.grey[500] : theme.palette.grey[50],
  borderRadius: "50%",
  width: useMediaQuery(theme.breakpoints.down("md")) ? "18px" : "30px",
  height: useMediaQuery(theme.breakpoints.down("md")) ? "18px" : "30px",
}));
