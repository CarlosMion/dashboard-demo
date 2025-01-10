import { RecentTransaction, TransactionSource } from "@/types";
import {
  Subtitle,
  Container,
  Title,
  Amount,
  TextContainer,
  IdentifierImg,
  Row,
} from "./styled";
import { formatMoney, formatTransactionDate } from "@/utils/stringUtils";
import { useMemo } from "react";
import {
  CardsIcon,
  BankIcon,
  UserTransactionIcon,
} from "@/components/atoms/icons";
import { useTheme } from "@mui/material";

interface TransactionItemProps {
  transaction: RecentTransaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const theme = useTheme();
  const transactionDirection = useMemo(
    () => (transaction.amount > 0 ? "income" : "outcome"),
    [transaction.amount]
  );

  const sourceIconMap = useMemo(
    () =>
      new Map([
        [TransactionSource.CARD, CardsIcon],
        [TransactionSource.BANK, BankIcon],
        [TransactionSource.PERSON, UserTransactionIcon],
      ]),
    []
  );

  const imgBackgroundColor = useMemo(
    () =>
      new Map([
        [TransactionSource.CARD, theme.palette.common.lightYellow],
        [TransactionSource.BANK, theme.palette.primary.light],
        [TransactionSource.PERSON, theme.palette.common.lightGreen],
      ]),
    [theme]
  );

  const IconComponent = useMemo(
    () => sourceIconMap.get(transaction.source),
    [transaction.source, sourceIconMap]
  );

  return (
    <Container>
      <Row>
        <IdentifierImg bgcolor={imgBackgroundColor.get(transaction.source)}>
          {IconComponent && <IconComponent />}
        </IdentifierImg>
        <TextContainer>
          <Title variant="subtitle1">{transaction.title}</Title>
          <Subtitle variant="body1">
            {formatTransactionDate(transaction.date)}
          </Subtitle>
        </TextContainer>
      </Row>
      <Amount variant="subtitle1" direction={transactionDirection}>
        {formatMoney(transaction.amount)}
      </Amount>
    </Container>
  );
}
