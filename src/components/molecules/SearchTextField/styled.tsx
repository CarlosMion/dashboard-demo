import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@/components/atoms/icons/SearchIcon";
import theme from "@/theme";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StartAdornment = styled(InputAdornment)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)({
  width: 255,
});

export const slotProps = {
  input: {
    startAdornment: (
      <StartAdornment position="start">
        <SearchIcon />
      </StartAdornment>
    ),
    sx: {
      paddingX: theme.spacing(3),
      paddingY: theme.spacing(1.2),
      fontSize: { xs: "14px!important", md: "16px!important" },
      fontWeight: 400,
      borderRadius: 40,
      border: "none",
      backgroundColor: theme.palette.background.default,
      input: {
        "::placeholder": {
          color: theme.palette.text.secondary,
          fontSize: 15,
        },
        py: 0.375,
      },
    },
  },
};
