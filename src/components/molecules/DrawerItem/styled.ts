"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

interface TitleProps {
  textcolor?: string | null;
}

export const Container = styled(ListItem)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  position: "relative",
  cursor: "pointer",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? `${theme.spacing(2.3)} ${theme.spacing(5)} ${theme.spacing(
        2.3
      )} ${theme.spacing(5.5)}`
    : `${theme.spacing(2)} ${theme.spacing(5)} ${theme.spacing(
        2
      )} ${theme.spacing(5.5)}`,
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.1)",
  },
  "&:active": {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const Title = styled(Typography)<TitleProps>(({ theme, textcolor }) => ({
  color: textcolor || theme.palette.grey[100],
}));

export const ActiveIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(0 + 50%)",
  left: 0,
  height: useMediaQuery(theme.breakpoints.down("md")) ? "55px" : "65px",
  width: useMediaQuery(theme.breakpoints.down("md")) ? "5px" : "6px",
  backgroundColor: theme.palette.text.primary,
  borderRadius: "0 10px 10px 0",
}));
