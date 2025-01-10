import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

interface AvatarProps {
  mobilesize: number;
  desktopsize: number;
}

export const StyledAvatar = styled(Avatar)<AvatarProps>(
  ({ mobilesize, desktopsize, theme }) => ({
    bgcolor: "transparent",
    width: useMediaQuery(theme.breakpoints.down("md"))
      ? mobilesize
      : desktopsize,
    height: useMediaQuery(theme.breakpoints.down("md"))
      ? mobilesize
      : desktopsize,
  })
);
