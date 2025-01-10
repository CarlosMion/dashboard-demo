"use client";

import { Text, Container, Content } from "./styled";
import { useTranslations } from "next-intl";
import PieChart from "@/components/molecules/PieChart";
import { useGetExpenseStatisticsQuery } from "@/api/requests/getExpenseStatistics";
import Spinner from "@/components/atoms/Spinner";

export default function ExpenseStatistics() {
  const t = useTranslations("dashboard");

  const { data: expenses, isLoading } = useGetExpenseStatisticsQuery({});

  return (
    <Container>
      <Text variant="h2">{t("expenseStatistics")}</Text>
      <Content>
        {isLoading ? <Spinner /> : <PieChart data={expenses || []} />}
      </Content>
    </Container>
  );
}
