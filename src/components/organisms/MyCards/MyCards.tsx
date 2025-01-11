"use client";

import Card from "@/components/molecules/Card";
import { Text, Container, Header, Slide } from "./styled";
import { useLocale, useTranslations } from "next-intl";
import { useGetCreditCardsQuery } from "@/api/requests/getCreditCards";
import Link from "next/link";
import { Button } from "@mui/material";
import { generatePath, routes } from "@/routes";
import { useMemo } from "react";
import CardSkeleton from "@/components/molecules/Card/CardSkeleton";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MyCards() {
  const t = useTranslations("dashboard");

  const { data: creditCards, isLoading } = useGetCreditCardsQuery({});
  const locale = useLocale();

  const creditCardsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.creditCards.url)}`,
    [locale]
  );

  return (
    <Container>
      <Header>
        <Text variant="h2">{t("myCards")}</Text>

        <Button
          component={Link}
          href={creditCardsUrl}
          variant="text"
          sx={{ textTransform: "none" }}
        >
          <Text variant="subtitle1">{t("seeAll")}</Text>
        </Button>
      </Header>

      <Swiper
        spaceBetween={20}
        style={{ width: "100%", flex: 1, display: "flex" }}
        breakpoints={{
          0: { slidesPerView: 1.4 },
          1350: { slidesPerView: 2.1 },
          1900: { slidesPerView: 3 },
          2200: { slidesPerView: 3.5 },
          2500: { slidesPerView: 4 },
        }}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Slide key={index}>
                <CardSkeleton />
              </Slide>
            ))
          : (creditCards || []).map((card, index) => (
              <Slide key={`creditCard-${index}`}>
                <Card
                  card={card}
                  variant={index % 2 !== 1 ? "dark" : "light"}
                />
              </Slide>
            ))}
      </Swiper>
    </Container>
  );
}
