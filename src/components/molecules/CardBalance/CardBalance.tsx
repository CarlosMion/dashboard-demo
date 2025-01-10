import { CreditCardVariant } from "../Card/types";
import { Value, Container, Title } from "./styled";

interface CardBalanceProps {
  title: string;
  value: string;
  variant?: CreditCardVariant;
}

export default function CardBalance({
  title,
  value,
  variant = "dark",
}: CardBalanceProps) {
  return (
    <Container>
      <Title variant="subtitle2" contrast={variant}>
        {title}
      </Title>
      <Value variant="subtitle2" contrast={variant}>
        {value}
      </Value>
    </Container>
  );
}
