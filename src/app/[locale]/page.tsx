"use client";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid2";
import MyCards from "@/components/organisms/MyCards";
import { Theme } from "@mui/material";
import RecentTransactions from "@/components/organisms/RecentTransactions";
import QuickTransfer from "@/components/organisms/QuickTransfer";
import ExpenseStatistics from "@/components/organisms/ExpenseStatistics";
import WeeklyActivity from "@/components/organisms/WeeklyActivity";
import BalanceHistory from "@/components/organisms/BalanceHistory";

const Container = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : `${theme.spacing(4)} ${theme.spacing(5)}`,
}));

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Container container spacing={3}>
      <Grid size={isMobile ? 12 : 8.5}>
        <MyCards />
      </Grid>
      <Grid size={isMobile ? 12 : 3.5}>
        <RecentTransactions />
      </Grid>
      <Grid size={isMobile ? 12 : 8}>
        <WeeklyActivity />
      </Grid>
      <Grid size={isMobile ? 12 : 4}>
        <ExpenseStatistics />
      </Grid>
      <Grid size={isMobile ? 12 : 4.75}>
        <QuickTransfer />
      </Grid>
      <Grid size={isMobile ? 12 : 7.25}>
        <BalanceHistory />
      </Grid>
    </Container>
  );
}
