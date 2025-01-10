"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import React from "react";

export default function EditProfileFormSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="text"
        sx={{
          fontSize: (theme) => theme.typography.body1.fontSize,
          width: "40%",
          mt: 0.75,
        }}
      />
      {[...Array(12)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          sx={{
            width: "100%",
            height: 56,
            mb: 1.75,
          }}
        />
      ))}
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          height: 40,
          mt: 2,
        }}
      />
    </Box>
  );
}
