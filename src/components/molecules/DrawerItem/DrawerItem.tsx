import { useMemo } from "react";
import { Container, Title } from "./styled";

import * as Icons from "@/components/atoms/icons";
import { useTheme } from "@mui/material";

interface DrawerItemProps {
  icon: keyof typeof Icons;
  title: string;
  isActive?: boolean;
}

export default function DrawerItem({
  icon,
  title,
  isActive = false,
}: DrawerItemProps) {
  const theme = useTheme();
  const IconComponent = icon ? Icons[icon] : null;

  const fillColor = useMemo<string | null>(
    () => (isActive ? theme.palette.text.primary : null),
    [isActive, theme]
  );

  return (
    <Container>
      {!!IconComponent && <IconComponent fill={fillColor} />}
      <Title variant="h3" textcolor={fillColor}>
        {title}
      </Title>
    </Container>
  );
}
