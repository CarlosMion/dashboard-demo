"use client";

import { useGetCreditCardsQuery } from "@/api/requests/getCreditCards";
import Card from "@/components/molecules/Card";
import { Theme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "@mui/material/styles/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

const Container = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: useMediaQuery(theme.breakpoints.down("md"))
    ? theme.spacing(2.5)
    : `${theme.spacing(4)} ${theme.spacing(5)}`,
}));

export default function CreditCardsPage() {
  const { data: creditCards, isLoading } = useGetCreditCardsQuery({});

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          {(creditCards || []).map((card, index) => (
            <Grid
              size={isMobile ? 12 : isLg ? 4 : 6}
              key={`creditCard-${index}`}
            >
              <Card card={card} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
