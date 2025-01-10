import { useTranslations } from "next-intl";
import { Container, Title } from "./styled";
import AmountInput from "@/components/molecules/AmountInput";

export default function MoneyTransferInput() {
  const t = useTranslations();
  return (
    <Container>
      <Title variant="body1">{t("writeAmount")}</Title>
      <AmountInput />
    </Container>
  );
}
