import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { t } from "i18next";
import List from "../../Utils/list/List";
import Text from "../../Utils/text/Text";

interface ServiceDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  options: string[];
  conclusion: string;
}

const ServiceDialog: FC<ServiceDialogProps> = ({
  open,
  handleClose,
  title,
  description,
  options,
  conclusion,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} style={{ lineHeight: 1.5 }}>
      <DialogTitle>{t(title)}</DialogTitle>
      <DialogContent style={{ margin: 10, padding: 30 }}>
        <Text text={t(description)} />
        <List options={options} />
        <Text text={t(conclusion)} />
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          {t("modal-button")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServiceDialog;
