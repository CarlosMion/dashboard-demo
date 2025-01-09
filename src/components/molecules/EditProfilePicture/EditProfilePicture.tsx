/* eslint-disable @typescript-eslint/no-unused-vars */
import NiceModal from "@ebay/nice-modal-react";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";
import React, { useCallback, useMemo } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";

import { blobToFile } from "@/utils";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import { User } from "@/types";
import EditImageDialog, {
  EditImageDialogProps,
} from "@/components/dialogs/EditProfilePictureDialog";
import { Edit } from "@mui/icons-material";
import { useUpdateUser } from "@/api/mutations/updateUser";

interface EditProfilePictureProps {
  user?: User;
}

export default function EditProfilePicture({ user }: EditProfilePictureProps) {
  const t = useTranslations();
  const updateUserMutation = useUpdateUser();

  const isLoading = useMemo<boolean>(
    () => updateUserMutation.isPending,
    [updateUserMutation.isPending]
  );

  const userId = useMemo<string>(() => user?.id || "", [user?.id]);

  const editImageHandler = useCallback(
    async (imageUrl: string, file: File): Promise<void> => {
      const resultBlob: Blob = await NiceModal.show(EditImageDialog, {
        imageUrl,
      });
      const resultImage = URL.createObjectURL(resultBlob);

      if (resultImage) {
        const resultFile = blobToFile(resultBlob, file.name);
        const formData = new FormData();
        formData.append("profilePicture", resultFile);
        // const response = await updateUserMutation.mutateAsync({
        //   userId,
        //   data: { ...formData },
        // });
      }
    },
    [userId, updateUserMutation]
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
    <Box data-testid="edit-profile-picture">
      <Typography variant={"body2"} sx={{ fontWeight: 500 }}>
        {t("profilePicture")}
      </Typography>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Box sx={{ position: "relative", display: "inline-block" }}>
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
            <Box
              sx={{
                position: "absolute",
                bottom: -2,
                right: -10,
              }}
            >
              <Box {...getRootProps()}>
                <input {...getInputProps()} />
              </Box>

              <Button
                variant={"contained"}
                color={"inherit"}
                onClick={selectImageHandler}
                sx={{
                  width: 45,
                  minWidth: 45,
                  height: 45,
                  p: 0,
                  borderRadius: "50%",
                }}
              >
                <Edit />
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <Divider sx={{ mt: 3 }} />
    </Box>
  );
}
