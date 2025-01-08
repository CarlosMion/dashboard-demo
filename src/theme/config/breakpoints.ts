import { Breakpoints } from "@mui/system";

const breakpoints: Omit<
  Breakpoints,
  "keys" | "not" | "up" | "only" | "between" | "down"
> = {
  values: {
    xs: 0,
    sm: 640,
    md: 1024,
    lg: 1200,
    xl: 1536,
  },
};

export default breakpoints;
