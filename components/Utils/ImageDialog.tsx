"use client";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

interface CvDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  imageUrl: string;
  alt?: string;
}

const ImageDialog: FC<CvDialogProps> = ({
  handleClose,
  open,
  title = "",
  imageUrl,
  alt = "Image",
}) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t(title)}</DialogTitle>
      <DialogContent>
        <Image src={imageUrl} alt={alt} width={700} height={950} />
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          {t("modal-button")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
