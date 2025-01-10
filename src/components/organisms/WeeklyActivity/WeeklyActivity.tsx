"use client";

import { Text, Container, Content } from "./styled";
import { useTranslations } from "next-intl";
import { useGetWeeklyActivityQuery } from "@/api/requests/getWeeklyActivity";
import Spinner from "@/components/atoms/Spinner";
import BarChart from "@/components/molecules/BarChart";

export default function WeeklyActivity() {
  const t = useTranslations("dashboard");

  const { data: activity, isLoading } = useGetWeeklyActivityQuery({});

  return (
    <Container>
      <Text variant="h2">{t("weeklyActivity")}</Text>
      <Content>
        {isLoading ? <Spinner /> : <BarChart data={activity || []} />}
      </Content>
    </Container>
  );
}
