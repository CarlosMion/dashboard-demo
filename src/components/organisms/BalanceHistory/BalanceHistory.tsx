"use client";

import { Text, Container, Content } from "./styled";
import { useTranslations } from "next-intl";
import { useGetBalanceHistoryQuery } from "@/api/requests/getBalanceHistory";
import Spinner from "@/components/atoms/Spinner";
import AreaChart from "@/components/molecules/AreaChart";

export default function BalanceHistory() {
  const t = useTranslations("dashboard");

  const { data: activity, isLoading } = useGetBalanceHistoryQuery({});

  return (
    <Container>
      <Text variant="h2">{t("balanceHistory")}</Text>
      <Content>
        {isLoading ? <Spinner /> : <AreaChart data={activity || []} />}
      </Content>
    </Container>
  );
}
