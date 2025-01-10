import Skeleton from "@mui/material/Skeleton/Skeleton";
import { Container, Headline, Title } from "./styled";

export const UserSelectorSkeleton = () => (
  <Container>
    <Skeleton variant="circular" width={45} height={45} />
    <Title variant="subtitle1">
      <Skeleton width="80px" />
    </Title>
    <Headline variant="body1">
      <Skeleton width="50px" />
    </Headline>
  </Container>
);
