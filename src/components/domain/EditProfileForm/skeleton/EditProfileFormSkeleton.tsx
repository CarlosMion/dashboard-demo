"use client";

import { Skeleton } from "@mui/material";
import React from "react";

export default function EditProfileFormSkeleton() {
  return (
    <Skeleton
      variant="text"
      sx={{
        fontSize: (theme) => theme.typography.body1.fontSize,
        width: "40%",
        mt: 0.75,
      }}
    />
  );
}
