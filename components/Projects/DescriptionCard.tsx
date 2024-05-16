import React, { FC } from "react";
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

interface DescriptionCardDialog {
  open: boolean;
  handleClose: () => void;
  imageUrl?: string;
  gitHubUrl?: string;
  webUrl?: string;
  alt?: string;
  title?: string;
  descripction?: string;
}

const DescriptionCardDialog: FC<DescriptionCardDialog> = ({
  open,
  handleClose,
  imageUrl,
  alt,
  title,
  descripction,
}: DescriptionCardDialog) => {
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
            sx={{ borderRadius: "10px" }}
            alt={alt ? alt : "Image"}
            height="140"
            image={
              imageUrl
                ? imageUrl
                : "https://tse3.mm.bing.net/th?id=OIP.xa7L4rkd4jgOCCRVJHkCJAAAAA&pid=Api&P=0&h=180"
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title ? title : "Title Project"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripction ? descripction : "Description project"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Web</Button>
            <Button size="small">GitHub</Button>
            <Button size="small" onClick={handleClose} color="error">
              Close
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
};

export default DescriptionCardDialog;
