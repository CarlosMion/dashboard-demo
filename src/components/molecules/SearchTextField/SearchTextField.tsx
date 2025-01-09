"use client";

import { ClickAwayListener, SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";
import { slotProps, StyledTextField } from "./styled";

type SearchTextFieldProps = {
  value?: string;
  autoFocus?: boolean;
  animate?: boolean;
  onChange?: (value: string) => void;
  onDismiss?: () => void;
  sx?: SxProps<Theme>;
};

export default function SearchTextField({
  value,
  autoFocus,
  animate,
  onChange,
  onDismiss,
  sx,
}: SearchTextFieldProps) {
  const t = useTranslations();

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );

  const keyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        onDismiss?.();
      }
    },
    []
  );

  const clickAwayHandler = useCallback((): void => {
    if (!value) {
      onDismiss?.();
    }
  }, [value, onDismiss]);

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <StyledTextField
        variant={"outlined"}
        size={"small"}
        value={value}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        autoFocus={autoFocus}
        className={animate ? "growIn" : undefined}
        sx={sx}
        placeholder={t("searchForSomething")}
        slotProps={slotProps}
      />
    </ClickAwayListener>
  );
}
