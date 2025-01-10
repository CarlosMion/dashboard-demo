"use client";

import {
  Text,
  Container,
  OptionsContainer,
  FloatingButton,
  Content,
  Slide,
} from "./styled";
import { useTranslations } from "next-intl";
import { useGetFriendsQuery } from "@/api/requests/getFriends";
import UserSelector from "@/components/molecules/UserSelector";
import { UserSelectorSkeleton } from "@/components/molecules/UserSelector/UserSelectorSkeleton";
import { ChevronRight } from "@mui/icons-material";
import MoneyTransferInput from "@/components/molecules/MoneyTransferInput";

export default function QuickTransfer() {
  const t = useTranslations("dashboard");

  const { data: friends, isLoading } = useGetFriendsQuery({});
  return (
    <Container>
      <Text variant="h2">{t("quickTransfer")}</Text>

      <Content>
        <OptionsContainer>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Slide key={index}>
                  <UserSelectorSkeleton />
                </Slide>
              ))
            : (friends || []).map((friend) => (
                <UserSelector
                  key={`user-selector-${friend.userId}`}
                  user={friend}
                />
              ))}
          <FloatingButton>
            <ChevronRight />
          </FloatingButton>
        </OptionsContainer>
        <MoneyTransferInput />
      </Content>
    </Container>
  );
}
