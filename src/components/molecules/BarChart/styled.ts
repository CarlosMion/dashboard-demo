"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CreditCardVariant } from "../Card/types";
import { Bar } from "recharts";

interface TitleProps {
  contrast: CreditCardVariant;
}

export const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "290px",
  width: "100%",
});
