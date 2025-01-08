"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

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
}));

export const Title = styled(Typography)<TitleProps>(({ theme, textcolor }) => ({
  color: textcolor || theme.palette.grey[100],
}));
