import { PropsWithChildren } from "react";
import * as Icons from "@/components/atoms/icons";
import { Container } from "./styled";
interface RoundIconButtonProps extends PropsWithChildren {
  icon: keyof typeof Icons;
  fill?: string;
  onClick?: () => void;
}

export default function RoundIconButton({
  icon,
  fill,
  onClick,
}: RoundIconButtonProps) {
  const IconComponent = icon ? Icons[icon] : null;

  if (!IconComponent) return null;

  return (
    <Container onClick={onClick}>
      <IconComponent fill={fill} />
    </Container>
  );
}
