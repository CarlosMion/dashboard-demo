import { alpha, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    blackCard: string;
    whiteTransparency: string;
    blueAreaChart: string;
  }

  interface TypeText {
    title: string;
  }

  interface CommonColors {
    depositGreen: string;
    withdrawRed: string;
    orange: string;
    lightGreen: string;
    teal: string;
    mustardYellow: string;
    lightYellow: string;
    blue: string;
  }
}

const palette: PaletteOptions = {
  mode: "light",
  contrastThreshold: 3,
  tonalOffset: 0.2,
  common: {
    black: "#000000",
    white: "#FFFFFF",
    depositGreen: "#41D4A8",
    blue: "#2D60FF",
    withdrawRed: "#FF4B4A",
    orange: "#FC7900",
    lightGreen: "#DCFAF8",
    teal: "#16DBCC",
    mustardYellow: "#FFBB38",
    lightYellow: "#FFF5D9",
  },
  primary: {
    main: "#396AFF",
    light: "#E7EDFF",
    dark: "#1814F3",
  },
  grey: {
    50: alpha("#9199AF", 0.5),
    100: "#B1B1B1",
    200: "#C8D6E2",
    300: "#A3B8C8",
    400: "#1C1C1C",
    500: alpha("#FFFFFF", 0.5),
    600: "#E7E4E8",
  },
  action: { hover: alpha("#000000", 0.06), selected: alpha("#000000", 0.12) },
  text: {
    primary: "#232323",
    secondary: "#718EBF",
    title: "#343C6A",
  },
  divider: "#DFEAF2",
  background: {
    default: "#F5F7FA",
    paper: "#FFFFFF",
    blackCard: "linear-gradient(100deg, #5B5A6F, #000000)",
    blueAreaChart: `linear-gradient(180deg, ${alpha(
      "#2D60FF",
      0.8
    )} 5%, ${alpha("#2D60FF", 0.1)} 95%)`,
    whiteTransparency: `linear-gradient(45deg, ${alpha(
      "#FFFFFF",
      0.15
    )}, ${alpha("#FFFFFF", 0)})`,
  },
};

export default palette;
