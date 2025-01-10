import { useTheme } from "@mui/material";
import SVGContainer from "@/components/atoms/icons/SVGContainer";
import { IconDefaultProps } from "@/components/atoms/icons/types";

export default function Spinner({
  fill,
  width = 30,
  height = 30,
}: IconDefaultProps) {
  const theme = useTheme();
  return (
    <SVGContainer width={width} height={height}>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={fill || theme.palette.primary.dark}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="94.248"
        strokeDashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          from="0 25 25"
          to="360 25 25"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;94.248"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </SVGContainer>
  );
}
