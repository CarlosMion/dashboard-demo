import { useTheme } from "@mui/material";
import SVGContainer from "@/components/atoms/icons/SVGContainer";
import { IconDefaultProps } from "../types";

export default function EditIcon({
  fill,
  width = 30,
  height = 30,
}: IconDefaultProps) {
  const theme = useTheme();
  return (
    <SVGContainer width={width} height={height}>
      <circle cx="15" cy="15" r="15" fill={theme.palette.text.primary} />
      <g clipPath="url(#clip0_455_2335)">
        <path
          d="M22.587 11.1632L21.2365 12.5138C21.0988 12.6515 20.8761 12.6515 20.7384 12.5138L17.4865 9.26184C17.3488 9.12415 17.3488 8.90149 17.4865 8.76379L18.837 7.41321C19.3849 6.86536 20.2755 6.86536 20.8263 7.41321L22.587 9.17395C23.1378 9.7218 23.1378 10.6124 22.587 11.1632ZM16.3263 9.92395L8.63294 17.6173L8.01185 21.1769C7.92689 21.6573 8.34583 22.0734 8.8263 21.9913L12.3859 21.3673L20.0792 13.674C20.2169 13.5363 20.2169 13.3136 20.0792 13.1759L16.8273 9.92395C16.6867 9.78626 16.464 9.78626 16.3263 9.92395ZM11.6359 16.9581C11.4747 16.797 11.4747 16.5392 11.6359 16.3781L16.1476 11.8663C16.3087 11.7052 16.5665 11.7052 16.7277 11.8663C16.8888 12.0275 16.8888 12.2853 16.7277 12.4464L12.216 16.9581C12.0548 17.1193 11.797 17.1193 11.6359 16.9581ZM10.5783 19.422H11.9845V20.4855L10.0949 20.8165L9.18372 19.9054L9.51478 18.0157H10.5783V19.422Z"
          fill={fill || theme.palette.common.white}
        />
      </g>
      <defs>
        <clipPath id="clip0_455_2335">
          <rect
            width={width}
            height={height}
            fill={theme.palette.common.white}
            transform="translate(8 7)"
          />
        </clipPath>
      </defs>
    </SVGContainer>
  );
}
