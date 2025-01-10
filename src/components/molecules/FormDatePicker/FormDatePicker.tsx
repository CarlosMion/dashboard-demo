import { Box, Popover } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { FieldContainer, Input, Title } from "./styled";
import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";

interface FormDatePickerProps<T extends FieldValues> {
  label: string;
  controllerName: Path<T>;
  control: Control<T> | undefined;
  error?: FieldError;
  helperText?: string;
  fieldSize?: number;
  rules?: Record<string, unknown>;
}

export default function FormDatePicker<T extends FieldValues>({
  label,
  controllerName,
  control,
  error,
  helperText,
  fieldSize = 6,
  rules,
}: FormDatePickerProps<T>) {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  return (
    <Grid size={fieldSize}>
      <Controller
        name={controllerName}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Box>
            <FieldContainer onClick={handleClick}>
              <Title variant="h4">{label}</Title>
              <Input
                {...field}
                fullWidth
                value={dayjs(field.value).format("D [of] MMMM YYYY")}
                error={!!error}
                helperText={helperText}
                slotProps={{ input: { readOnly: true } }}
              />
            </FieldContainer>
            <Popover
              id={"date-picker-popover"}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker {...field} onAccept={handleClose} />
              </LocalizationProvider>
            </Popover>
          </Box>
        )}
      />
    </Grid>
  );
}
