import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { FieldContainer, Input, Title } from "./styled";
import { HTMLInputTypeAttribute } from "react";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  controllerName: Path<T>;
  control: Control<T> | undefined;
  error?: FieldError;
  helperText?: string;
  fieldSize?: number;
  rules?: Record<string, unknown>;
  type?: HTMLInputTypeAttribute;
}

export default function FormField<T extends FieldValues>({
  label,
  controllerName,
  control,
  error,
  helperText,
  fieldSize = 6,
  rules,
  type = "text",
}: FormFieldProps<T>) {
  return (
    <Grid size={fieldSize}>
      <Controller
        name={controllerName}
        control={control}
        rules={rules}
        render={({ field }) => (
          <FieldContainer>
            <Title variant="h4">{label}</Title>
            <Input
              {...field}
              fullWidth
              type={type}
              error={!!error}
              helperText={helperText}
            />
          </FieldContainer>
        )}
      />
    </Grid>
  );
}
