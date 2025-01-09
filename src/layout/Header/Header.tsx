"use client";

import {
  ActionButton,
  Actions,
  Container,
  DesktopOnlyActions,
  DesktopOnlyMenu,
  Title,
} from "./styled";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { routeNames } from "@/routes";
import { toCamelCase } from "@/utils/pathUtils";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import SearchTextField from "@/components/molecules/SearchTextField";
import { useGetUserByIdQuery } from "@/api/requests/getUserByIdentifier";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NotificationsIcon,
  SettingsOutlinedIcon,
} from "@/components/atoms/icons";

interface HeaderProps {
  toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
  const t = useTranslations("drawer");
  const pathname = usePathname();

  const { data: loggedInUser, isLoading } = useGetUserByIdQuery({
    userId: "1",
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

  return (
    <Container>
      <DesktopOnlyMenu onClick={toggleDrawer}>
        <MenuIcon />
      </DesktopOnlyMenu>
      <Title variant="h1">{t(titleKey)}</Title>
      <Actions>
        <DesktopOnlyActions>
          <SearchTextField />
          <ActionButton>
            <SettingsOutlinedIcon />
          </ActionButton>
          <ActionButton>
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
    </Container>
  );
}
