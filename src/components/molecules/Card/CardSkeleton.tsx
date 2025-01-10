import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid2";
import { Container, GridContent } from "./styled";
import { useTheme } from "@mui/material";

export default function CardSkeleton() {
  const theme = useTheme();

  return (
    <Container container variant="dark">
      <GridContent
        size={9.5}
        sx={{
          paddingTop: theme.spacing(2),
          paddingLeft: { xs: theme.spacing(1.5), md: theme.spacing(3) },
        }}
      >
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width="100%" height={15} />
      </GridContent>
      <GridContent
        size={2.5}
        sx={{
          paddingTop: theme.spacing(2.5),
        }}
      >
        <Skeleton variant="circular" width={40} height={30} />
      </GridContent>
      <GridContent
        size={5}
        sx={{
          paddingTop: theme.spacing(2),
          paddingLeft: { xs: theme.spacing(3), md: theme.spacing(3) },
        }}
      >
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width="80%" height={20} />
      </GridContent>
      <GridContent size={5}>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width="80%" height={20} />
      </GridContent>
      <Grid size={12}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={30}
          sx={{ borderRadius: "0 0 25px 25px" }}
        />
      </Grid>
    </Container>
  );
}
