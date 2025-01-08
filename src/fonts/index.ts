import { Inter, Lato } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export const lato = Lato({
  variable: "--font-lato",
  display: "swap",
  preload: true,
  weight: ["400", "700"],
  style: "normal",
});

export const FONT_VAR_INTER = "var(--font-inter)";
export const FONT_VAR_LATO = "var(--font-lato)";
