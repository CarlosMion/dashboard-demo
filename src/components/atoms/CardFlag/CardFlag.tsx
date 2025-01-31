import { CreditCardVariant } from "@/components/molecules/Card/types";
import { Container, Circle } from "./styled";

interface CardFlagProps {
  variant?: CreditCardVariant;
}

export default function CardFlag({ variant = "dark" }: CardFlagProps) {
  return (
    <Container role="presentation">
      <Circle contrast={variant} />
      <Circle contrast={variant} sx={{ left: "28%" }} />
    </Container>
  );
}
