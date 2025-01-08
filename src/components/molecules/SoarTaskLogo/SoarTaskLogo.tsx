import { SoarTaskIcon } from "@/components/atoms/icons";
import { Container, Title } from "./styled";
import { useTranslations } from "next-intl";

export default function SoarTaskLogo() {
  const t = useTranslations("dashboard");

  return (
    <Container>
      <SoarTaskIcon />
      <Title variant="h1">{t("soarTask")}</Title>
    </Container>
  );
}
