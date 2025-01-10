import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export const StyledIconButton = styled(IconButton)({
  width: "30px",
  height: "30px",
  padding: 0,
});

export const Container = styled(Box)({
  textAlign: "center",
  mt: 2,
});

export const RelativePictureContainer = styled(Box)({
  position: "relative",
  display: "inline-block",
});

export const AbsoluteContainer = styled(Box)({
  position: "absolute",
  bottom: -2,
  right: -10,
});
