import React from "react";
import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  Amount,
  IdentifierImg,
} from "./styled";
import Skeleton from "@mui/material/Skeleton";

export default function TransactionItemSkeleton() {
  return (
    <Container>
      <IdentifierImg>
        <Skeleton variant="circular" width={45} height={45} />
      </IdentifierImg>
      <TextContainer>
        <Title variant="subtitle1">
          <Skeleton width="80px" />
        </Title>
        <Subtitle variant="body1">
          <Skeleton width="60px" />
        </Subtitle>
      </TextContainer>
      <Amount variant="subtitle1" direction="income">
        <Skeleton width={60} />
      </Amount>
    </Container>
  );
}
