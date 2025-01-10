import { CreditCardVariant } from "../Card/types";
import { Value, Container, Title } from "./styled";

interface CardInfoProps {
  title: string;
  value: string;
  variant?: CreditCardVariant;
}

export default function CardInfo({
  title,
  value,
  variant = "dark",
}: CardInfoProps) {
  return (
    <Container>
      <Title variant="subtitle2" contrast={variant}>
        {title}
      </Title>
      <Value variant="body2" contrast={variant}>
        {value}
      </Value>
    </Container>
  );
}
