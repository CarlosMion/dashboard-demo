import { SoarTaskIcon } from "@/components/atoms/icons";
import { Container, MobileOnlyButton, SmallArrowBack, Title } from "./styled";
import { useTranslations } from "next-intl";

interface SoarTaskLogoProps {
  toggleDrawer: () => void;
}

export default function SoarTaskLogo({ toggleDrawer }: SoarTaskLogoProps) {
  const t = useTranslations("drawer");

  return (
    <Container>
      <MobileOnlyButton onClick={toggleDrawer}>
        <SmallArrowBack />
      </MobileOnlyButton>
      <SoarTaskIcon />
      <Title variant="h1">{t("soarTask")}</Title>
    </Container>
  );
}
