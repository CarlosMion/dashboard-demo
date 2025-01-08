"use client";

import SoarTaskLogo from "@/components/molecules/SoarTaskLogo";
import { StyledDrawer } from "./styled";
import { List } from "@mui/material";
import DashboardItem from "@/components/molecules/DrawerItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { routes } from "@/routes";

interface DrawerProps {
  isOpen?: boolean;
}

export default function Drawer({ isOpen = false }: DrawerProps) {
  const t = useTranslations("drawer");

  const urlPathname = usePathname();
  const locale = useLocale();

  console.log(">> urlPathname", urlPathname);
  console.log(">> locale", locale);

  const activeTab = useMemo<string>(
    () => urlPathname.replace(locale, ""),
    [urlPathname, locale]
  );

  console.log(">> activeTab", activeTab);

  return (
    <StyledDrawer open={isOpen} hideBackdrop>
      <SoarTaskLogo />
      <List>
        <DashboardItem
          icon="HomeIcon"
          title={t("dashboard")}
          isActive={activeTab === routes.home.url}
        />
        <DashboardItem
          icon="TransactionsIcon"
          title={t("transactions")}
          isActive={activeTab === routes.transactions.url}
        />
        <DashboardItem
          icon="AccountsIcon"
          title={t("accounts")}
          isActive={activeTab === routes.accounts.url}
        />
        <DashboardItem
          icon="InvestmentsIcon"
          title={t("investments")}
          isActive={activeTab === routes.investments.url}
        />
        <DashboardItem
          icon="CreditCardIcon"
          title={t("creditCards")}
          isActive={activeTab === routes.creditCards.url}
        />
        <DashboardItem
          icon="LoansIcon"
          title={t("loans")}
          isActive={activeTab === routes.loans.url}
        />
        <DashboardItem
          icon="ServicesIcon"
          title={t("services")}
          isActive={activeTab === routes.services.url}
        />
        <DashboardItem
          icon="PrivilegesIcon"
          title={t("myPrivileges")}
          isActive={activeTab === routes.myPrivileges.url}
        />
        <DashboardItem
          icon="SettingsSolidIcon"
          title={t("settings")}
          isActive={activeTab === routes.settings.url}
        />
      </List>
    </StyledDrawer>
  );
}
