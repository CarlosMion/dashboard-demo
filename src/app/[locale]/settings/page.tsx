"use client";

import { useGetUserByIdQuery } from "@/api/requests/getUserByIdentifier";
import { FullPageCenteredContainer } from "@/components/CommonStyledComponents";
import EditProfileForm from "@/components/domain/EditProfileForm";
import EditProfileFormSkeleton from "@/components/domain/EditProfileForm/skeleton";
import TabsContainer from "@/components/organisms/TabsContainer";
import { TabInfo } from "@/components/organisms/TabsContainer/TabsContainer";
import { DEFAULT_USER_ID } from "@/constants";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : `${theme.spacing(4)} ${theme.spacing(5)}`,
}));

export default function SettingsPage() {
  const t = useTranslations("settingsPage.tabs");

  const { data: loggedInUser, isLoading } = useGetUserByIdQuery({
    userId: DEFAULT_USER_ID,
  });

  const editProfileTab = useMemo<TabInfo>(
    () => ({
      label: t("editProfile"),
      content: isLoading ? (
        <EditProfileFormSkeleton /> // TODO: FINISH SKELETON
      ) : (
        <EditProfileForm user={loggedInUser} />
      ),
    }),
    [isLoading, loggedInUser, t]
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
