import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SendMoneyButton from "@/components/atoms/SendMoneyButton";
import theme from "@/theme";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
  width: 255,
});

export const slotProps = {
  input: {
    endAdornment: (
      <InputAdornment position="end">
        <SendMoneyButton />
      </InputAdornment>
    ),
    sx: {
      // paddingX: theme.spacing(3),
      paddingX: 0,
      paddingY: theme.spacing(1.2),
      fontSize: { xs: "14px!important", md: "16px!important" },
      fontWeight: 400,
      borderRadius: 40,
      border: "none",
      backgroundColor: theme.palette.background.default,
      input: {
        "::placeholder": {
          color: theme.palette.text.secondary,
          fontSize: 13,
          px: 0,
        },
        py: 0.375,
      },
    },
  },
};
