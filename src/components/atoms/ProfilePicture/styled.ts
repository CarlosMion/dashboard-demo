import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

interface AvatarProps {
  width: number;
  height: number;
}

export const StyledAvatar = styled(Avatar)<AvatarProps>(
  ({ width, height }) => ({
    bgcolor: "transparent",
    width: width,
    height: height,
  })
);
