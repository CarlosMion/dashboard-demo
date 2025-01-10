"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { SwiperSlide } from "swiper/react";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const Header = styled(Stack)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
}));

export const Slide = styled(SwiperSlide)({
  display: "flex",
  height: "100%",
  width: "100%",
});
