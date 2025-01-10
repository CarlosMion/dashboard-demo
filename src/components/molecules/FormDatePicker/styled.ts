"use client";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const FieldContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.2),
}));

export const Input = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: theme.palette.divider,
    borderRadius: "15px",
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[200],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[300],
    },
  },
}));
