import { FONT_VAR_INTER, FONT_VAR_LATO } from "@/fonts";
import { Typography } from "@mui/material/styles/createTypography";

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    fontSize: pxToRem(sm),
    "@media (min-width:640px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1024px)": {
      fontSize: pxToRem(lg),
    },
  };
}

function responsiveLineHeights({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    lineHeight: pxToRem(sm),
    "@media (min-width:640px)": {
      lineHeight: pxToRem(md),
    },
    "@media (min-width:1024px)": {
      lineHeight: pxToRem(lg),
    },
  };
}

const typography: Omit<Typography, "pxToRem" | "button" | "h5" | "h6"> = {
  fontFamily: FONT_VAR_INTER,
  fontSize: 16,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 20, md: 28, lg: 32 }),
    ...responsiveLineHeights({ sm: 24, md: 34, lg: 36 }),
  },
  h2: {
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 16, md: 22, lg: 26 }),
    ...responsiveLineHeights({ sm: 20, md: 28, lg: 32 }),
  },
  h3: {
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 14, md: 18, lg: 20 }),
    ...responsiveLineHeights({ sm: 16, md: 25, lg: 28 }),
  },
  h4: {
    fontWeight: 500,
    ...responsiveFontSizes({ sm: 13, md: 16, lg: 20 }),
    ...responsiveLineHeights({ sm: 16, md: 20, lg: 24 }),
  },
  overline: {
    ...responsiveFontSizes({ sm: 13, md: 16, lg: 20 }),
    ...responsiveLineHeights({ sm: 16, md: 20, lg: 24 }),
  },
  subtitle1: {
    fontWeight: 500,
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
    ...responsiveLineHeights({ sm: 16, md: 18, lg: 20 }),
  },
  body1: {
    ...responsiveFontSizes({ sm: 12, md: 15, lg: 18 }),
    ...responsiveLineHeights({ sm: 14.5, md: 18, lg: 22 }),
  },
  subtitle2: {
    fontFamily: FONT_VAR_LATO,
    ...responsiveFontSizes({ sm: 10, md: 12, lg: 16 }),
    ...responsiveLineHeights({ sm: 12, md: 14.5, lg: 18 }),
  },
  body2: {
    fontFamily: FONT_VAR_LATO,
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 13, md: 15, lg: 17 }),
    ...responsiveLineHeights({ sm: 16, md: 18, lg: 20 }),
  },
  caption: {
    fontWeight: 700,
    ...responsiveFontSizes({ sm: 11, md: 13, lg: 15 }),
    ...responsiveLineHeights({ sm: 14, md: 18, lg: 20 }),
  },
} as const;

export default typography;
