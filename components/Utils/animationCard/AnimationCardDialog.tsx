import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AnimationCardDialogProps {
  open: boolean;
  handleClose: () => void;
  imageUrl: string;
  webUrl?: string;
  alt?: string;
  title: string;
  descripction?: string;
}

const AnimationCardDialog: FC<AnimationCardDialogProps> = ({
  open,
  handleClose,
  imageUrl = "./notImage.jpg",
  alt,
  title,
  descripction,
}: AnimationCardDialogProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <Card sx={{ padding: 3, borderRadius: "15px" }}>
          <CardMedia
            component="img"
            sx={{ borderRadius: "10px", maxWidth: "370px", margin: "auto" }}
            alt={alt ? alt : "Image"}
            height="300"
            image={imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title ? t(title) : "My hobbie"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripction ? t(descripction) : "Description project"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              onClick={handleClose}
              color="error"
            >
              {t("modal-button")}
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
};

export default AnimationCardDialog;
