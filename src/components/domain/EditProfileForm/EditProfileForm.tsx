"use client";

import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Grid from "@mui/material/Grid2";
import { User } from "@/types";
import FormField from "@/components/molecules/FormField";
import { useTranslations } from "next-intl";
import {
  EMAIL_REGEX_VALIDATION,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX_VALIDATION,
  POSTAL_CODE_REGEX_VALIDATION,
} from "@/constants";
import {
  Container,
  FormButton,
  FullWidthButtonContainer,
  PictureContainer,
} from "./styled";
import dayjs, { Dayjs } from "dayjs";
import FormDatePicker from "@/components/molecules/FormDatePicker";
import EditProfilePicture from "@/components/molecules/EditProfilePicture";
import { useUpdateUser } from "@/api/mutations/updateUser";

interface ProfileFormData {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  birthDate: Dayjs;
  currentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface ProfileFormProps {
  user?: User;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const theme = useTheme();
  const t = useTranslations("settingsPage.profileForm");
  const updateUserMutation = useUpdateUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      fullName: user?.fullName,
      userName: user?.userName,
      email: user?.email,
      password: user?.password,
      birthDate: dayjs(user?.birthDate || ""),
      currentAddress: user?.currentAddress,
      permanentAddress: user?.permanentAddress,
      city: user?.city,
      postalCode: user?.postalCode,
      country: user?.country,
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fieldSize = useMemo(() => (isMobile ? 12 : 6), [isMobile]);

  const onSubmit = useCallback(
    (data: ProfileFormData) => {
      updateUserMutation.mutateAsync({
        userId: user?.id || "",
        data: { ...data, birthDate: data.birthDate.toISOString() },
      });
    },
    [updateUserMutation, user?.id]
  );

  return (
    <Container>
      <PictureContainer>
        <EditProfilePicture user={user} />
      </PictureContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1.75}>
          <FormField
            label={t("yourName")}
            controllerName="fullName"
            control={control}
            fieldSize={fieldSize}
            error={errors.fullName}
            helperText={errors.fullName?.message}
            rules={{
              required: t("errors.fieldRequired", { field: t("yourName") }),
            }}
          />

          <FormField
            label={t("userName")}
            controllerName="userName"
            control={control}
            fieldSize={fieldSize}
            error={errors.userName}
            helperText={errors.userName?.message}
            rules={{
              required: t("errors.fieldRequired", { field: t("userName") }),
            }}
          />

          <FormField
            label={t("email")}
            controllerName="email"
            control={control}
            fieldSize={fieldSize}
            error={errors.email}
            helperText={errors.email?.message}
            rules={{
              required: t("errors.fieldRequired", { field: t("email") }),
              pattern: {
                value: EMAIL_REGEX_VALIDATION,
                message: t("errors.invalidField", { field: t("email") }),
              },
            }}
          />

          <FormField
            label={t("password")}
            controllerName="password"
            control={control}
            fieldSize={fieldSize}
            error={errors.password}
            helperText={errors.password?.message}
            rules={{
              required: t("errors.fieldRequired", { field: t("password") }),
              pattern: {
                value: PASSWORD_REGEX_VALIDATION,
                message: t("errors.mustContainLettersAndNumbers", {
                  field: t("password"),
                }),
              },
              minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: t("errors.fieldMustContainAtLeast", {
                  field: t("password"),
                  min: PASSWORD_MIN_LENGTH,
                }),
              },
            }}
            type="password"
          />

          <FormDatePicker
            label={t("dateOfBirth")}
            controllerName="birthDate"
            control={control}
            fieldSize={fieldSize}
          />

          <FormField
            label={t("presentAddress")}
            controllerName="currentAddress"
            control={control}
            fieldSize={fieldSize}
            error={errors.currentAddress}
            helperText={errors.currentAddress?.message}
            rules={{
              required: t("errors.fieldRequired", {
                field: t("presentAddress"),
              }),
            }}
          />

          <FormField
            label={t("permanentAddress")}
            controllerName="permanentAddress"
            control={control}
            fieldSize={fieldSize}
            error={errors.permanentAddress}
            helperText={errors.permanentAddress?.message}
            rules={{
              required: t("errors.fieldRequired", {
                field: t("permanentAddress"),
              }),
            }}
          />

          <FormField
            label={t("city")}
            controllerName="city"
            control={control}
            fieldSize={fieldSize}
            error={errors.city}
            helperText={errors.city?.message}
            rules={{
              required: t("errors.fieldRequired", {
                field: t("city"),
              }),
            }}
          />

          <FormField
            label={t("postalCode")}
            controllerName="postalCode"
            control={control}
            fieldSize={fieldSize}
            error={errors.postalCode}
            helperText={errors.postalCode?.message}
            rules={{
              required: t("errors.fieldRequired", { field: t("postalCode") }),
              pattern: {
                value: POSTAL_CODE_REGEX_VALIDATION,
                message: t("errors.invalidField", { field: t("postalCode") }),
              },
            }}
          />

          <FormField
            label={t("country")}
            controllerName="country"
            control={control}
            fieldSize={fieldSize}
            error={errors.country}
            helperText={errors.country?.message}
          />
        </Grid>
        <FullWidthButtonContainer>
          <FormButton variant="contained" type="submit">
            {t("save")}
          </FormButton>
        </FullWidthButtonContainer>
      </form>
    </Container>
  );
};

export default ProfileForm;
