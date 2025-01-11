"use client";

import { Text, Container, Content, Slide } from "./styled";
import { useTranslations } from "next-intl";
import { useGetFriendsQuery } from "@/api/requests/getFriends";
import UserSelector from "@/components/molecules/UserSelector";
import { UserSelectorSkeleton } from "@/components/molecules/UserSelector/UserSelectorSkeleton";
import MoneyTransferInput from "@/components/molecules/MoneyTransferInput";
import { Swiper } from "swiper/react";

export default function QuickTransfer() {
  const t = useTranslations("dashboard");

  const { data: friends, isLoading } = useGetFriendsQuery({});
  return (
    <Container>
      <Text variant="h2">{t("quickTransfer")}</Text>

      <Content>
        <Swiper
          spaceBetween={20}
          style={{ width: "100%", flex: 1, display: "flex" }}
          breakpoints={{
            0: { slidesPerView: 3 },
            1350: { slidesPerView: 4 },
            1650: { slidesPerView: 5 },
            2200: { slidesPerView: 6 },
          }}
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Slide key={index}>
                  <UserSelectorSkeleton />
                </Slide>
              ))
            : (friends || []).map((friend) => (
                <Slide key={`user-selector-${friend.userId}`}>
                  <UserSelector user={friend} />
                </Slide>
              ))}
        </Swiper>
        <MoneyTransferInput />
      </Content>
    </Container>
  );
}
