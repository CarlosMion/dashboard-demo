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
  width?: number;
  height?: number;
}

export default memo(function ProfilePicture({
  src,
  blurSrc,
  title,
  width = 60,
  height = 60,
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
  }, []);

  return (
    <StyledAvatar
      width={width}
      height={height}
      title={title}
      onClick={clickHandler}
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