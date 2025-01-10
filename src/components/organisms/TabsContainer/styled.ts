"use client";

import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { FONT_VAR_INTER } from "@/fonts";
import TabList from "@mui/lab/TabList";
import useMediaQuery from "@mui/material/useMediaQuery";
import TabPanel from "@mui/lab/TabPanel/TabPanel";

export const StyledTabsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  paddingTop: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  height: "fit-content",
  borderRadius: useMediaQuery(theme.breakpoints.down("md")) ? "15px" : "25px",
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? "0.75rem" : "1rem",
  color: theme.palette.text.secondary,
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(1)
    : theme.spacing(2),
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

export const TabContainer = styled(TabPanel)(({ theme }) => ({
  padding: 0,
  paddingTop: theme.spacing(2),
}));
