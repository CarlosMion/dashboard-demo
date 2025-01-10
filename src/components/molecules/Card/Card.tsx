import { Container, GridContent } from "./styled";
import CardBalance from "../CardBalance";
import { useTranslations } from "next-intl";
import CardInfo from "../CardInfo";
import { CreditCard } from "@/types";
import { CreditCardVariant } from "./types";
import { useGetUserByIdQuery } from "@/api/requests/getUserByIdentifier";
import CardSkeleton from "./CardSkeleton";
import { formatMoney, formatValidThru } from "@/utils/stringUtils";
import CardFooter from "../CardFooter";
import Grid from "@mui/material/Grid2";
import { ChipCardIcon } from "@/components/atoms/icons";
import { useTheme } from "@mui/material";

interface CardProps {
  card: CreditCard;
  variant?: CreditCardVariant;
}

export default function Card({ card, variant = "dark" }: CardProps) {
  const t = useTranslations("card");
  const theme = useTheme();

  const { data: user, isLoading } = useGetUserByIdQuery({
    userId: card.userId,
  });

  if (isLoading) return <CardSkeleton />;

  return (
    <Container container variant={variant}>
      <GridContent
        size={9.5}
        sx={{
          paddingTop: theme.spacing(2),
          paddingLeft: { xs: theme.spacing(1.5), md: theme.spacing(3) },
        }}
      >
        <CardBalance
          title={t("balance")}
          value={formatMoney(card.balance)}
          variant={variant}
        />
      </GridContent>
      <GridContent
        size={2.5}
        sx={{
          paddingTop: theme.spacing(2.5),
        }}
      >
        <ChipCardIcon
          fill={
            variant === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black
          }
        />
      </GridContent>

      <GridContent
        size={5}
        sx={{
          paddingTop: theme.spacing(2),
          paddingLeft: { xs: theme.spacing(3), md: theme.spacing(3) },
        }}
      >
        <CardInfo
          title={t("cardHolder")}
          value={user?.fullName || ""}
          variant={variant}
        />
      </GridContent>
      <GridContent size={5}>
        <CardInfo
          title={t("validThru")}
          value={formatValidThru(card.expirationDate)}
          variant={variant}
        />
      </GridContent>
      <Grid size={12}>
        <CardFooter variant={variant} cardNumber={card.cardNumber} />
      </Grid>
    </Container>
  );
}
