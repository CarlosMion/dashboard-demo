"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface AmountProps {
  direction: "income" | "outcome";
}
interface IdentifierImgProps {
  bgcolor?: string;
}

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  width: "100%",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const TextContainer = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Amount = styled(Typography)<AmountProps>(
  ({ theme, direction }) => ({
    color:
      direction === "income"
        ? theme.palette.common.depositGreen
        : theme.palette.common.withdrawRed,
    whiteSpace: "nowrap",
    lineClamp: 1,
  })
);

export const IdentifierImg = styled(Box)<IdentifierImgProps>(
  ({ theme, bgcolor }) => ({
    minWidth: "45px",
    minHeight: "45px",
    maxWidth: "45px",
    maxHeight: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgcolor || theme.palette.grey[100],
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);
