import { alpha, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    blackCard: string;
    whiteTransparency: string;
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
  }

  interface PaletteOptions {
    commonColors?: Partial<CommonColors>;
  }
}

const palette: PaletteOptions = {
  mode: "light",
  contrastThreshold: 3,
  tonalOffset: 0.2,
  common: {
    black: "#000000",
    white: "#FFFFFF",
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
    blackCard: "linear-gradient(0%, #5B5A6F, #000000)",
    whiteTransparency: `linear-gradient(0%, #FFFFFF, ${alpha("#FFFFFF", 0)})`,
  },
  commonColors: {
    depositGreen: "#41D4A8",
    withdrawRed: "#FF5C93",
    orange: "#FC7900",
    lightGreen: "#DCFAF8",
    teal: "#16DBCC",
    mustardYellow: "#FFBB38",
    lightYellow: "#FFF5D9",
  },
};

export default palette;
