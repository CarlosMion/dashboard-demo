"use client";

import SoarTaskLogo from "@/components/molecules/SoarTaskLogo";
import { StyledDrawer } from "./styled";
import { List, useMediaQuery, useTheme } from "@mui/material";
import DashboardItem from "@/components/molecules/DrawerItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { generatePath, routes } from "@/routes";

interface DrawerProps {
  isOpen?: boolean;
  toggleDrawer: () => void;
}

export default function Drawer({ toggleDrawer, isOpen = false }: DrawerProps) {
  const t = useTranslations("drawer");
  const theme = useTheme();

  const urlPathname = usePathname();
  const locale = useLocale();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const homeUrl = useMemo<string>(
    () => `${generatePath(routes.home.url)}${locale}`,
    [locale]
  );

  const transactionsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.transactions.url)}`,
    [locale]
  );

  const accountsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.accounts.url)}`,
    [locale]
  );

  const investmentsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.investments.url)}`,
    [locale]
  );

  const creditCardsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.creditCards.url)}`,
    [locale]
  );

  const loansUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.loans.url)}`,
    [locale]
  );

  const servicesUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.services.url)}`,
    [locale]
  );

  const myPrivilegesUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.myPrivileges.url)}`,
    [locale]
  );

  const settingsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.settings.url)}`,
    [locale]
  );

  const activeTab = useMemo<string>(() => urlPathname, [urlPathname]);

  const variant = useMemo(
    () => (isMobile ? "temporary" : "permanent"),
    [isMobile]
  );

  return (
    <StyledDrawer open={isOpen} variant={variant} onClose={toggleDrawer}>
      <SoarTaskLogo toggleDrawer={toggleDrawer} />
      <List>
        <DashboardItem
          icon="HomeIcon"
          title={t("dashboard")}
          path={homeUrl}
          isActive={activeTab === homeUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="TransactionsIcon"
          title={t("transactions")}
          path={transactionsUrl}
          isActive={activeTab === transactionsUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="AccountsIcon"
          title={t("accounts")}
          path={accountsUrl}
          isActive={activeTab === accountsUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="InvestmentsIcon"
          title={t("investments")}
          path={investmentsUrl}
          isActive={activeTab === investmentsUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="CreditCardIcon"
          title={t("creditCards")}
          path={creditCardsUrl}
          isActive={activeTab === creditCardsUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="LoansIcon"
          title={t("loans")}
          path={loansUrl}
          isActive={activeTab === loansUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="ServicesIcon"
          title={t("services")}
          path={servicesUrl}
          isActive={activeTab === servicesUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="PrivilegesIcon"
          title={t("myPrivileges")}
          path={myPrivilegesUrl}
          isActive={activeTab === myPrivilegesUrl}
          onClick={toggleDrawer}
        />
        <DashboardItem
          icon="SettingsSolidIcon"
          title={t("settings")}
          path={settingsUrl}
          isActive={activeTab === settingsUrl}
          onClick={toggleDrawer}
        />
      </List>
    </StyledDrawer>
  );
}
