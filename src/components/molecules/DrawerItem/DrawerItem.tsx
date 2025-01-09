import { useMemo } from "react";
import { Container, Title } from "./styled";

import * as Icons from "@/components/atoms/icons";
import { useTheme } from "@mui/material";
import Link from "next/link";

interface DrawerItemProps {
  icon: keyof typeof Icons;
  title: string;
  isActive?: boolean;
  path: string;
}

export default function DrawerItem({
  icon,
  title,
  path,
  isActive = false,
}: DrawerItemProps) {
  const theme = useTheme();
  const IconComponent = icon ? Icons[icon] : null;

  const fillColor = useMemo<string | null>(
    () => (isActive ? theme.palette.text.primary : null),
    [isActive, theme]
  );

  return (
    <Link href={path} prefetch>
      <Container>
        {!!IconComponent && <IconComponent fill={fillColor} />}
        <Title variant="h3" textcolor={fillColor}>
          {title}
        </Title>
      </Container>
    </Link>
  );
}