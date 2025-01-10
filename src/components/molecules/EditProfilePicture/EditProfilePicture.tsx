/* eslint-disable @typescript-eslint/no-unused-vars */
import NiceModal from "@ebay/nice-modal-react";
import { Box, Skeleton } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useCallback, useMemo } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";

import { blobToFile } from "@/utils";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import { User } from "@/types";
import EditImageDialog from "@/components/dialogs/EditProfilePictureDialog";
import { useUpdateUser } from "@/api/mutations/updateUser";
import { EditIcon } from "@/components/atoms/icons";
import {
  AbsoluteContainer,
  Container,
  RelativePictureContainer,
  StyledIconButton,
} from "./styled";
import { useUploadProfilePicture } from "@/api/mutations/uploadProfilePicture";
import { toast } from "react-toastify";

interface EditProfilePictureProps {
  user?: User;
}

export default function EditProfilePicture({ user }: EditProfilePictureProps) {
  const t = useTranslations();
  const updateUserMutation = useUpdateUser();
  const uploadProfilePictureMutation = useUploadProfilePicture();

  const isLoading = useMemo<boolean>(
    () => updateUserMutation.isPending,
    [updateUserMutation.isPending]
  );

  const editImageHandler = useCallback(
    async (imageUrl: string, file: File): Promise<void> => {
      const resultBlob: Blob = await NiceModal.show(EditImageDialog, {
        imageUrl,
      });
      const resultImage = URL.createObjectURL(resultBlob);

      if (resultImage) {
        const resultFile = blobToFile(resultBlob, file.name);
        await uploadProfilePictureMutation.mutateAsync({
          file: resultFile,
        });
        toast.success(t("profilePictureUpdated"));
      }
    },
    [uploadProfilePictureMutation, t]
  );

  const imageSelectedHandler = useCallback(
    async (
      acceptedFiles: File[],
      _fileRejections: FileRejection[],
      _event: DropEvent
    ): Promise<void> => {
      const imageFile = acceptedFiles[0];

      if (imageFile) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            editImageHandler(reader.result, imageFile);
          }
        });
        reader.readAsDataURL(imageFile);
      }
    },
    [editImageHandler]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: imageSelectedHandler,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    multiple: false,
  });

  const selectImageHandler = useCallback(async (): Promise<void> => {
    open();
  }, [open]);

  return (
    <Container>
      <RelativePictureContainer>
        {!isLoading && user ? (
          <ProfilePicture
            desktopSize={90}
            mobileSize={100}
            src={user.profilePictureUrl}
            title={user.fullName}
          />
        ) : (
          <Skeleton variant={"circular"} width={120} height={120} />
        )}
        {user && (
          <AbsoluteContainer>
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
            </Box>

            <StyledIconButton onClick={selectImageHandler}>
              <EditIcon />
            </StyledIconButton>
          </AbsoluteContainer>
        )}
      </RelativePictureContainer>
    </Container>
  );
}
