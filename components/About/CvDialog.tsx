"use client";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface CvDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CvDialog: FC<CvDialogProps> = ({ handleClose, open }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={handleClose} style={{ width: "100%" }}>
      <DialogContent>
        <Image
          className="image-content"
          src="/cv.png"
          alt={"Image About"}
          width={500}
          height={900}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("modal-button")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CvDialog;
