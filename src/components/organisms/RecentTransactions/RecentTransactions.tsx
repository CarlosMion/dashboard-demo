"use client";

import { Text, Container, TransactionsContainer } from "./styled";
import { useTranslations } from "next-intl";
import { useGetRecentTransactionsQuery } from "@/api/requests/getRecentTransactions";
import TransactionItem from "@/components/molecules/TransactionItem";
import TransactionItemSkeleton from "@/components/molecules/TransactionItem/TransactionItemSkeleton";

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
            <TransactionItemSkeleton />
            <TransactionItemSkeleton />
            <TransactionItemSkeleton />
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
