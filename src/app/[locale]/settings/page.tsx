"use client";

import { FullPageCenteredContainer } from "@/components/CommonStyledComponents";
import TabsContainer from "@/components/organisms/TabsContainer";
import { TabInfo } from "@/components/organisms/TabsContainer/TabsContainer";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
}));

export default function SettingsPage() {
  const t = useTranslations("settingsPage");

  const editProfileTab = useMemo<TabInfo>(
    () => ({ label: t("editProfile"), content: <div>editProfile</div> }),
    [t]
  );

  const preferencesTab = useMemo<TabInfo>(
    () => ({
      label: t("preferences"),
      content: (
        <FullPageCenteredContainer>preferences</FullPageCenteredContainer>
      ),
    }),
    [t]
  );

  const securityTab = useMemo<TabInfo>(
    () => ({
      label: t("security"),
      content: <FullPageCenteredContainer>security</FullPageCenteredContainer>,
    }),
    [t]
  );

  const tabs = useMemo<TabInfo[]>(
    () => [editProfileTab, preferencesTab, securityTab],
    [editProfileTab, preferencesTab, securityTab]
  );

  return (
    <Container>
      <TabsContainer tabs={tabs} />
    </Container>
  );
}
