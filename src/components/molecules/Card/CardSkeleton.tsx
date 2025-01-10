import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardSkeletonContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,
  width: useMediaQuery(theme.breakpoints.down("md")) ? "265px" : "350px",
  margin: "auto",
}));

const CardSkeleton = () => {
  return (
    <CardSkeletonContainer>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Skeleton variant="text" width="60%" height={30} />
        </Grid>
        <Grid size={6}>
          <Skeleton variant="text" width="80%" height={20} />
        </Grid>
        <Grid size={6}>
          <Skeleton variant="text" width="80%" height={20} />
        </Grid>
        <Grid size={12}>
          <Skeleton variant="text" width="100%" height={30} />
        </Grid>
        <Grid size={12}>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Grid>
      </Grid>
    </CardSkeletonContainer>
  );
};

export default CardSkeleton;
