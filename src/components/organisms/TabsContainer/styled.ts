import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { FONT_VAR_INTER } from "@/fonts";
import TabList from "@mui/lab/TabList";

export const StyledTabsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  height: "fit-content",
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  fontFamily: FONT_VAR_INTER,
  "&.Mui-selected": {
    color: theme.palette.text.primary,
  },
}));

export const TabHeaderContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: `${theme.palette.text.primary} !important`,
    borderRadius: "10px 10px 0 0",
    height: "3px",
  },
}));
