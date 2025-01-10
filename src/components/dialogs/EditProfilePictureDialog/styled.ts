import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ApplyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  padding: `${theme.spacing(1.5)} ${theme.spacing(8)}`,
  width: useMediaQuery(theme.breakpoints.down("md")) ? "100%" : "auto",
  marginTop: theme.spacing(2),
  textTransform: "none",
}));
