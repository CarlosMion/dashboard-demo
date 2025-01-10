"use client";

import { Text, Container, TransactionsContainer } from "./styled";
import { useTranslations } from "next-intl";
import CardSkeleton from "@/components/molecules/Card/CardSkeleton";
import { useGetRecentTransactionsQuery } from "@/api/requests/getRecentTransactions";
import TransactionItem from "@/components/molecules/TransactionItem";

export default function RecentTransactions() {
  const t = useTranslations("dashboard");

  const { data: recentTransactions, isLoading } = useGetRecentTransactionsQuery(
    {}
  );

  return (
    <Container>
      <Text variant="h2">{t("recentTransactions")}</Text>

      <TransactionsContainer>
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          (recentTransactions || []).map((card, index) => (
            <TransactionItem key={`creditCard-${index}`} transaction={card} />
          ))
        )}
      </TransactionsContainer>
    </Container>
  );
}
