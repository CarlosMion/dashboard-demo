"use client";

import {
  ActionButton,
  Actions,
  MainContentContainer,
  DesktopOnlyActions,
  MobileOnly,
  SmallMenuIcon,
  Title,
  Container,
  MobileOnlyButton,
} from "./styled";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { generatePath, routeNames, routes } from "@/routes";
import { toCamelCase } from "@/utils/pathUtils";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import SearchTextField from "@/components/molecules/SearchTextField";
import { useGetUserByIdQuery } from "@/api/requests/getUserByIdentifier";
import {
  NotificationsIcon,
  SettingsOutlinedIcon,
} from "@/components/atoms/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DEFAULT_USER_ID } from "@/constants";

interface HeaderProps {
  toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const { data: loggedInUser, isLoading } = useGetUserByIdQuery({
    userId: DEFAULT_USER_ID,
  });

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

  const settingsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.settings.url)}`,
    [locale]
  );

  const goToSettings = useCallback(() => {
    router.push(settingsUrl);
  }, [router, settingsUrl]);

  return (
    <Container>
      <MainContentContainer>
        <MobileOnlyButton onClick={toggleDrawer}>
          <SmallMenuIcon />
        </MobileOnlyButton>
        <Title variant="h1">{t(`drawer.${titleKey}`)}</Title>
        <Actions>
          <DesktopOnlyActions>
            <SearchTextField />
            <ActionButton onClick={goToSettings}>
              <SettingsOutlinedIcon />
            </ActionButton>
            <ActionButton
              onClick={() => toast.info(t("youHaveNoNewNotifications"))}
            >
              <NotificationsIcon />
            </ActionButton>
          </DesktopOnlyActions>
          {!isLoading && (
            <ProfilePicture
              title={profilePictureAlt}
              src={loggedInUser?.profilePictureUrl}
            />
          )}
        </Actions>
      </MainContentContainer>
      <MobileOnly>
        <SearchTextField sx={{ width: "100%" }} />
      </MobileOnly>
    </Container>
  );
}
