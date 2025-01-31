"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { memo, useCallback, useEffect, useState } from "react";

import { PLACEHOLDER_PROFILE_PICTURE } from "@/constants";
import { StyledAvatar } from "./styled";

interface ProfilePictureProps {
  src?: string;
  blurSrc?: string;
  title?: string;
  fallBackSrc?: string;
  onClick?: () => void;
  mobileSize?: number;
  desktopSize?: number;
}

export default memo(function ProfilePicture({
  src,
  blurSrc,
  title,
  mobileSize = 35,
  desktopSize = 60,
  fallBackSrc,
  onClick,
}: ProfilePictureProps) {
  const t = useTranslations();

  const [imageSrc, setImageSrc] = useState(
    src || fallBackSrc || PLACEHOLDER_PROFILE_PICTURE
  );

  const handleError = useCallback(() => {
    setImageSrc(fallBackSrc || PLACEHOLDER_PROFILE_PICTURE);
  }, [fallBackSrc]);

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src]);

  const clickHandler = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick?.();
      }
    },
    [onClick]
  );

  return (
    <StyledAvatar
      mobilesize={mobileSize}
      desktopsize={desktopSize}
      title={title}
      onClick={clickHandler}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
    >
      <Image
        src={imageSrc}
        alt={title ?? t("profilePicture")}
        onError={handleError}
        fill
        placeholder={"empty"}
        sizes="(max-width: 768px) 100vw, 50vw"
        blurDataURL={blurSrc}
        loading="lazy"
        data-testid="profile-picture-img"
      />
    </StyledAvatar>
  );
});
