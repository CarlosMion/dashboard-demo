import CardFlag from "@/components/atoms/CardFlag";
import { Value, Container } from "./styled";
import { maskCardNumber } from "@/utils";
import { CreditCardVariant } from "../Card/types";

interface CardFooterProps {
  cardNumber: number;
  variant?: CreditCardVariant;
}

export default function CardFooter({
  cardNumber,
  variant = "dark",
}: CardFooterProps) {
  return (
    <Container>
      <Value variant="body2" contrast={variant}>
        {maskCardNumber(cardNumber)}
      </Value>
      <CardFlag variant={variant} />
    </Container>
  );
}
