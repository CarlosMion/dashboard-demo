"use client";

import SoarTaskLogo from "@/components/molecules/SoarTaskLogo";
import { StyledDrawer } from "./styled";
import { List } from "@mui/material";
import DashboardItem from "@/components/molecules/DrawerItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { generatePath, routes } from "@/routes";

interface DrawerProps {
  isOpen?: boolean;
}

export default function Drawer({ isOpen = false }: DrawerProps) {
  const t = useTranslations("drawer");

  const urlPathname = usePathname();
  const locale = useLocale();

  console.log(">> urlPathname", urlPathname);
  console.log(">> locale", locale);

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

  console.log(">> activeTab", activeTab);

  return (
    <StyledDrawer open={isOpen} hideBackdrop>
      <SoarTaskLogo />
      <List>
        <DashboardItem
          icon="HomeIcon"
          title={t("dashboard")}
          path={homeUrl}
          isActive={activeTab === homeUrl}
        />
        <DashboardItem
          icon="TransactionsIcon"
          title={t("transactions")}
          path={transactionsUrl}
          isActive={activeTab === transactionsUrl}
        />
        <DashboardItem
          icon="AccountsIcon"
          title={t("accounts")}
          path={accountsUrl}
          isActive={activeTab === accountsUrl}
        />
        <DashboardItem
          icon="InvestmentsIcon"
          title={t("investments")}
          path={investmentsUrl}
          isActive={activeTab === investmentsUrl}
        />
        <DashboardItem
          icon="CreditCardIcon"
          title={t("creditCards")}
          path={creditCardsUrl}
          isActive={activeTab === creditCardsUrl}
        />
        <DashboardItem
          icon="LoansIcon"
          title={t("loans")}
          path={loansUrl}
          isActive={activeTab === loansUrl}
        />
        <DashboardItem
          icon="ServicesIcon"
          title={t("services")}
          path={servicesUrl}
          isActive={activeTab === servicesUrl}
        />
        <DashboardItem
          icon="PrivilegesIcon"
          title={t("myPrivileges")}
          path={myPrivilegesUrl}
          isActive={activeTab === myPrivilegesUrl}
        />
        <DashboardItem
          icon="SettingsSolidIcon"
          title={t("settings")}
          path={settingsUrl}
          isActive={activeTab === settingsUrl}
        />
      </List>
    </StyledDrawer>
  );
}
