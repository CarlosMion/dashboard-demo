"use client";

import { User } from "@/types";
import { Actions, Container, DesktopOnlyActions, Title } from "./styled";
import RoundIconButton from "@/components/atoms/RoundIconButton";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { routeNames } from "@/routes";
import { toCamelCase } from "@/utils/pathUtils";
import { useTheme } from "@mui/material";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import SearchTextField from "@/components/molecules/SearchTextField";

interface HeaderProps {
  toggleDrawer: () => void;
  loggedInUser?: User;
}

export default function Header({ loggedInUser, toggleDrawer }: HeaderProps) {
  const t = useTranslations("drawer");
  const theme = useTheme();

  const pathname = usePathname();
  const pathKey = useMemo(
    () => toCamelCase(pathname.split("/")[2]),
    [pathname]
  );

  const titleKey = useMemo<string>(() => {
    if (!pathKey) return "dashboard";

    return routeNames.get(pathKey) || "dashboard";
  }, [pathKey]);

  const profilePictureAlt = useMemo(
    () => `${loggedInUser?.fullName}'s profile picture`,
    [loggedInUser?.fullName]
  );

  return (
    <Container>
      <Title variant="h1">{t(titleKey)}</Title>
      <Actions>
        <DesktopOnlyActions>
          <SearchTextField />
          <RoundIconButton icon="SettingsOutlinedIcon" />
          <RoundIconButton
            icon="NotificationsIcon"
            fill={theme.palette.primary.main}
          />
        </DesktopOnlyActions>
        <ProfilePicture
          title={profilePictureAlt}
          src={loggedInUser?.profilePictureUrl}
        />
      </Actions>
    </Container>
  );
}