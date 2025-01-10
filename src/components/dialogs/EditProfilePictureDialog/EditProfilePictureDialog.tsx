import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slider,
  useMediaQuery,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import React, { FunctionComponent, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { Close } from "@mui/icons-material";

import { getCroppedImg } from "@/utils";
import DialogTransitionSlide from "../transitions/DialogTransitionSlide";

export type EditImageDialogProps = { imageUrl: string } & NiceModalHocProps;

const EditImageDialog: FunctionComponent<EditImageDialogProps> =
  NiceModal.create(({ imageUrl }) => {
    const modal = useModal();
    const t = useTranslations();

    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [croppedArea, setCroppedArea] = useState<Area | undefined>(undefined);

    const fullScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );

    const cropCompleteHandler = useCallback(
      (_croppedArea: Area, croppedAreaPixels: Area): void => {
        setCroppedArea(croppedAreaPixels);
      },
      [setCroppedArea]
    );

    const submitHandler = useCallback(async (): Promise<void> => {
      if (!croppedArea) {
        return;
      }

      const croppedImage = await getCroppedImg(imageUrl, croppedArea);

      modal.resolve(croppedImage);
      modal.hide();
    }, [modal, imageUrl, croppedArea]);

    const closeHandler = useCallback((): void => {
      modal.resolve(undefined);
      modal.hide();
    }, [modal]);

    return (
      <Dialog
        open={modal.visible}
        onClose={closeHandler}
        TransitionProps={{
          onExited: () => modal.remove(),
        }}
        fullWidth
        fullScreen={fullScreen}
        TransitionComponent={fullScreen ? DialogTransitionSlide : undefined}
        PaperProps={{
          sx: {
            maxWidth: fullScreen ? undefined : "500px",
            borderRadius: fullScreen ? 0 : 5,
            borderTopLeftRadius: (theme) =>
              fullScreen ? theme.spacing(7) : undefined,
            borderTopRightRadius: (theme) =>
              fullScreen ? theme.spacing(7) : undefined,
          },
        }}
        sx={{ pt: fullScreen ? `${100}px` : undefined }} // TODO HERE HEADERHEIGHT
      >
        <DialogTitle
          variant={"h6"}
          sx={{ textAlign: "center", color: "primary.light", pb: 5 }}
        >
          {t("editMedia")}
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ px: 8, pt: { xs: 7, md: 2 }, pb: { xs: 8, md: 10 } }}>
            <Box
              sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
            >
              <Cropper
                image={imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={cropCompleteHandler}
                onZoomChange={setZoom}
              />
            </Box>

            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e, zoom) =>
                setZoom(Array.isArray(zoom) ? zoom[0] : zoom)
              }
              sx={{ mt: 3, mb: 2 }}
            />

            <Button
              variant={"contained"}
              color={"primary"}
              fullWidth
              onClick={submitHandler}
            >
              {t("apply")}
            </Button>
          </Box>
        </DialogContent>

        <IconButton
          onClick={closeHandler}
          sx={{
            position: "absolute",
            top: (theme) => theme.spacing(5),
            right: (theme) => theme.spacing(4),
          }}
        >
          <Close />
        </IconButton>
      </Dialog>
    );
  });

export default EditImageDialog;
