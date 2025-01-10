"use client";

import Card from "@/components/molecules/Card";
import { Text, Container, Header, CardRow } from "./styled";
import { useLocale, useTranslations } from "next-intl";
import { useGetCreditCardsQuery } from "@/api/requests/getCreditCards";
import { MY_CARDS_LIMIT } from "@/constants";
import Link from "next/link";
import { Button } from "@mui/material";
import { generatePath, routes } from "@/routes";
import { useMemo } from "react";
import CardSkeleton from "@/components/molecules/Card/CardSkeleton";
import { CreditCard } from "@/types";

interface MyCardsProps {
  displayMode?: "all" | "limited";
}

export default function MyCards({ displayMode = "limited" }: MyCardsProps) {
  const t = useTranslations("dashboard");

  const { data: creditCards, isLoading } = useGetCreditCardsQuery({});
  const locale = useLocale();

  const creditCardsUrl = useMemo<string>(
    () => `/${locale}${generatePath(routes.creditCards.url)}`,
    [locale]
  );

  const creditCardsToDisplay = useMemo<CreditCard[]>(
    () =>
      displayMode === "all"
        ? creditCards || []
        : (creditCards || [])?.slice(0, MY_CARDS_LIMIT),
    [creditCards, displayMode]
  );

  return (
    <Container>
      {displayMode === "limited" && (
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
      )}
      <CardRow mode={displayMode}>
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          creditCardsToDisplay.map((card, index) => (
            <Card
              key={`creditCard-${index}`}
              card={card}
              variant={index % 2 !== 1 ? "dark" : "light"}
            />
          ))
        )}
      </CardRow>
    </Container>
  );
}
